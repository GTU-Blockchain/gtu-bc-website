import { useState, useMemo } from 'react';
import { ComposableMap, Geographies, Geography, Sphere, Graticule } from 'react-simple-maps';
import { useLanguage } from '../context/LanguageContext';
import competitionsData from '../data/competitions.json';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/react-simple-maps@0.10.0/topojson-maps/world-110m.json';

interface Competition {
  id: number;
  countryCode: string;
  country: { tr: string; en: string };
  competitionName: { tr: string; en: string };
  projectName: string;
  award: { tr: string; en: string };
  awardType: 'first' | 'second' | 'third' | 'pool';
  date: string;
}

const competitions = competitionsData as Competition[];

const MapSection = () => {
  const { language, t } = useLanguage();
  const [tooltipContent, setTooltipContent] = useState<string>('');
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const competitionsByCountry = useMemo(() => {
    const map: Record<string, Competition[]> = {};
    competitions.forEach((c) => {
      if (!map[c.countryCode]) map[c.countryCode] = [];
      map[c.countryCode].push(c);
    });
    return map;
  }, []);

  const highlightedCountries = useMemo(
    () => new Set(Object.keys(competitionsByCountry)),
    [competitionsByCountry]
  );

  const getAwardEmoji = (awardType: 'first' | 'second' | 'third' | 'pool'): string => {
    switch (awardType) {
      case 'first':
        return '🥇';
      case 'second':
        return '🥈';
      case 'third':
        return '🥉';
      case 'pool':
        return '🏅';
      default:
        return '';
    }
  };

  const handleMouseEnter = (
    geo: { properties?: { ISO_A2?: string } },
    evt: React.MouseEvent
  ) => {
    const countryCode = geo.properties?.ISO_A2;
    if (!countryCode || !competitionsByCountry[countryCode]) return;

    const countryCompetitions = competitionsByCountry[countryCode];
    const lang = language as 'tr' | 'en';
    
    // Group competitions by competition name
    const competitionsByEvent: Record<string, Competition[]> = {};
    countryCompetitions.forEach((c) => {
      const key = c.competitionName[lang];
      if (!competitionsByEvent[key]) competitionsByEvent[key] = [];
      competitionsByEvent[key].push(c);
    });

    // Build tooltip content
    const lines: string[] = [];
    const firstComp = countryCompetitions[0];
    lines.push(firstComp.country[lang]); // Ülke
    
    Object.entries(competitionsByEvent).forEach(([eventName, comps]) => {
      lines.push(eventName); // Yarışma adı
      comps.forEach((c) => {
        const emoji = getAwardEmoji(c.awardType);
        lines.push(`${c.projectName} ${emoji}`); // Proje adı + emoji
      });
    });

    setTooltipContent(lines.join('\n'));
    setTooltipPosition({ x: evt.clientX, y: evt.clientY });
  };

  const handleMouseMove = (evt: React.MouseEvent) => {
    if (tooltipContent) {
      setTooltipPosition({ x: evt.clientX, y: evt.clientY });
    }
  };

  const handleMouseLeave = () => {
    setTooltipContent('');
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50" id="map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold text-lg mb-2 uppercase tracking-wider">
            {t('map.badge')}
          </h2>
          <h3 className="text-4xl font-bold text-navy-dark leading-tight">{t('map.title')}</h3>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">{t('map.description')}</p>
        </div>

        <div
          className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              // Avrupa odaklı merkez (yaklaşık olarak Orta Avrupa)
              center: [30, 50],
              // Biraz daha zoom
              scale: 250,
            }}
            width={900}
            height={500}
            style={{ width: '100%', height: 'auto' }}
          >
            <Sphere stroke="#E4E5E6" strokeWidth={0.5} fill="transparent" />
            <Graticule stroke="#E4E5E6" strokeWidth={0.3} />
            <Geographies geography={GEO_URL}>
              {({ geographies }: { geographies: Array<{ rsmKey: string; properties?: { ISO_A2?: string } }> }) =>
                geographies.map((geo: { rsmKey: string; properties?: { ISO_A2?: string } }) => {
                  const countryCode = geo.properties?.ISO_A2;
                  const isHighlighted = countryCode && highlightedCountries.has(countryCode);
                  return (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      onMouseEnter={(evt) => handleMouseEnter(geo, evt)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        default: {
                          fill: isHighlighted ? '#1d97aa' : '#E4E5E6',
                          stroke: '#FFF',
                          strokeWidth: 0.5,
                          outline: 'none',
                          transition: 'all 0.2s ease',
                        },
                        hover: {
                          fill: isHighlighted ? '#158a9b' : '#D4D5D6',
                          stroke: '#FFF',
                          strokeWidth: 1,
                          outline: 'none',
                          cursor: isHighlighted ? 'pointer' : 'default',
                        },
                        pressed: {
                          outline: 'none',
                        },
                      }}
                    />
                  );
                })
              }
            </Geographies>
          </ComposableMap>

          {tooltipContent && (
            <div
              className="fixed z-50 px-4 py-3 bg-navy-dark text-white text-sm rounded-xl shadow-2xl max-w-sm pointer-events-none whitespace-pre-line"
              style={{
                left: Math.min(tooltipPosition.x + 15, window.innerWidth - 320),
                top: Math.min(tooltipPosition.y + 15, window.innerHeight - 250),
              }}
            >
              <div className="font-bold text-primary mb-2">{t('map.tooltipTitle')}</div>
              {tooltipContent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MapSection;
