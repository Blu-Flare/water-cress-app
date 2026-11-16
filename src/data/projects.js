import herringboneDriveway from '../../assets/Herringbone Driveway.webp';
import flagstoneSteps from '../../assets/Custom Flagstone Steps.webp';
import luxuryPoolDeck from '../../assets/Luxury Pool Deck.webp';
import commercialDriveway from '../../assets/Commercial Driveway.jpg';
import modernBathroom from '../../assets/Modern Bathroom Suite.jpg';
import featureStoneWall from '../../assets/Feature Stone Wall.jpg';
import gardenSteppingStones from '../../assets/Garden Stepping Stones.webp';
import geometricFloorTiling from '../../assets/Geometric Floor Tiling.webp';
import outdoorPatio from '../../assets/Outdoor Entertaining Patio.webp';
import courtyardPaving from '../../assets/Courtyard Paving.webp';
import kitchenBacksplash from '../../assets/Kitchen Backsplash.jpg';
import polishedStoneFlooring from '../../assets/Polished Stone Flooring.webp';
import grandEntranceSteps from '../../assets/Grand Entrance Steps.webp';
import frontWalkwayRedesign from '../../assets/Front Walkway Redesign.jpg';
import luxuryBathroomFinish from '../../assets/Luxury Bathroom Finish.jpg';

import indoorOutdoorTiling from '../../assets/indoor and outdoor tiling.webp';
import stoneCladding from '../../assets/stone clading.webp';
import drivewayPavingExtra from '../../assets/driveway paving(1).webp';

export const PROJECT_IMAGES = {
  herringboneDriveway,
  flagstoneSteps,
  luxuryPoolDeck,
  commercialDriveway,
  modernBathroom,
  featureStoneWall,
  gardenSteppingStones,
  geometricFloorTiling,
  outdoorPatio,
  courtyardPaving,
  kitchenBacksplash,
  polishedStoneFlooring,
  grandEntranceSteps,
  frontWalkwayRedesign,
  luxuryBathroomFinish,
  indoorOutdoorTiling,
  stoneCladding,
  drivewayPavingExtra,
};

const PAVING_POOL = [
  herringboneDriveway,
  commercialDriveway,
  luxuryPoolDeck,
  courtyardPaving,
  frontWalkwayRedesign,
  drivewayPavingExtra,
];

const TILING_POOL = [
  modernBathroom,
  luxuryBathroomFinish,
  geometricFloorTiling,
  kitchenBacksplash,
  polishedStoneFlooring,
  indoorOutdoorTiling,
];

const HARDSCAPING_POOL = [
  flagstoneSteps,
  featureStoneWall,
  gardenSteppingStones,
  outdoorPatio,
  grandEntranceSteps,
  stoneCladding,
];

const buildGallery = (cover, pool, count = 5) => {
  const extras = pool.filter((image) => image !== cover);
  const gallery = [cover];

  for (let index = 0; gallery.length < count; index += 1) {
    gallery.push(extras[index % extras.length]);
  }

  return gallery;
};

/**
 * Archive projects. `cover` is used in the grid and `images` powers the
 * slideshow inside the Zustand-driven modal.
 *
 * All imagery is imported from the local `assets/` folder so the archive
 * renders your own project photos in development and production builds.
 */
export const projects = [
  {
    id: 'herringbone-driveway',
    title: 'Herringbone Driveway',
    category: 'Paving',
    location: 'Gaborone, Central District',
    scope:
      'Complete removal of old concrete and installation of a durable, interlocking herringbone brick driveway. Included ground preparation, edge restraints, and a weed-membrane base.',
    cover: herringboneDriveway,
    images: buildGallery(herringboneDriveway, PAVING_POOL),
  },
  {
    id: 'custom-flagstone-steps',
    title: 'Custom Flagstone Steps',
    category: 'Hardscaping',
    location: 'Francistown, North East',
    scope:
      'Design and construction of tiered outdoor steps leading to a raised garden. Used natural flagstone to ensure slip resistance and visual integration with the surrounding landscape.',
    cover: flagstoneSteps,
    images: buildGallery(flagstoneSteps, HARDSCAPING_POOL),
  },
  {
    id: 'luxury-pool-deck',
    title: 'Luxury Pool Deck',
    category: 'Paving',
    location: 'Maun, North West',
    scope:
      'Installation of non-slip, heat-resistant sandstone pavers around a commercial resort pool. The project required precise cutting to fit around curved edges and existing drainage systems.',
    cover: luxuryPoolDeck,
    images: buildGallery(luxuryPoolDeck, PAVING_POOL),
  },
  {
    id: 'commercial-driveway',
    title: 'Commercial Driveway',
    category: 'Paving',
    location: 'Gaborone, Industrial',
    scope:
      'Heavy-duty block paving for a logistics warehouse. The scope included regrading the slope for water runoff and installing reinforced concrete edging to handle heavy truck traffic.',
    cover: commercialDriveway,
    images: buildGallery(commercialDriveway, PAVING_POOL),
  },
  {
    id: 'modern-bathroom-suite',
    title: 'Modern Bathroom Suite',
    category: 'Tiling',
    location: 'Gaborone, Extension 12',
    scope:
      'Full strip-out and re-tiling of a master bathroom. Installed large-format porcelain tiles on the floor and walls, including custom waterproofing and precise mitred edges.',
    cover: modernBathroom,
    images: buildGallery(modernBathroom, TILING_POOL),
  },
  {
    id: 'feature-stone-wall',
    title: 'Feature Stone Wall',
    category: 'Hardscaping',
    location: 'Kasane, Chobe',
    scope:
      'Exterior stone cladding on a luxury safari lodge. The team used local natural stone to blend the structure into the environment while providing a durable, weather-resistant finish.',
    cover: featureStoneWall,
    images: buildGallery(featureStoneWall, HARDSCAPING_POOL),
  },
  {
    id: 'garden-stepping-stones',
    title: 'Garden Stepping Stones',
    category: 'Hardscaping',
    location: 'Palapye, Central',
    scope:
      'Creation of a winding garden path using large, irregular slate stepping stones. The project involved laying a compacted base and filling the gaps with decorative river pebbles.',
    cover: gardenSteppingStones,
    images: buildGallery(gardenSteppingStones, HARDSCAPING_POOL),
  },
  {
    id: 'geometric-floor-tiling',
    title: 'Geometric Floor Tiling',
    category: 'Tiling',
    location: 'Gaborone, CBD',
    scope:
      "Installation of geometric patterned tiles in a modern office reception area. Required meticulous layout planning to ensure the pattern aligned perfectly with the room's dimensions.",
    cover: geometricFloorTiling,
    images: buildGallery(geometricFloorTiling, TILING_POOL),
  },
  {
    id: 'outdoor-entertaining-patio',
    title: 'Outdoor Entertaining Patio',
    category: 'Hardscaping',
    location: 'Molepolole, Kweneng',
    scope:
      'Construction of a large slate patio for outdoor dining. The scope included building a low retaining wall on one side and integrating a built-in fire pit area.',
    cover: outdoorPatio,
    images: buildGallery(outdoorPatio, HARDSCAPING_POOL),
  },
  {
    id: 'courtyard-paving',
    title: 'Courtyard Paving',
    category: 'Paving',
    location: 'Mahalapye, Central',
    scope:
      'Re-paving of an internal courtyard using natural stone. The work involved improving drainage, laying a new concrete base, and sealing the stone for longevity.',
    cover: courtyardPaving,
    images: buildGallery(courtyardPaving, PAVING_POOL),
  },
  {
    id: 'kitchen-backsplash',
    title: 'Kitchen Backsplash',
    category: 'Tiling',
    location: 'Gaborone, Phakalane',
    scope:
      'Installation of an intricate subway tile backsplash. The project required precision cutting around electrical outlets and ensuring a seamless transition to the countertops.',
    cover: kitchenBacksplash,
    images: buildGallery(kitchenBacksplash, TILING_POOL),
  },
  {
    id: 'polished-stone-flooring',
    title: 'Polished Stone Flooring',
    category: 'Tiling',
    location: 'Lobatse, South East',
    scope:
      'Supply and installation of polished marble-effect tiles in a residential living area. Included floor leveling and the application of a specialist grout for high-traffic areas.',
    cover: polishedStoneFlooring,
    images: buildGallery(polishedStoneFlooring, TILING_POOL),
  },
  {
    id: 'grand-entrance-steps',
    title: 'Grand Entrance Steps',
    category: 'Hardscaping',
    location: 'Serowe, Central',
    scope:
      'Construction of wide, welcoming entrance steps using concrete and finished with high-quality stone tiles. Designed to provide a grand entrance while remaining safe and slip-resistant.',
    cover: grandEntranceSteps,
    images: buildGallery(grandEntranceSteps, HARDSCAPING_POOL),
  },
  {
    id: 'front-walkway-redesign',
    title: 'Front Walkway Redesign',
    category: 'Paving',
    location: 'Kanye, Southern',
    scope:
      'Removal of a cracked concrete walkway and replacement with interlocking pavers. The project focused on creating a wider, more accessible path with a curved aesthetic.',
    cover: frontWalkwayRedesign,
    images: buildGallery(frontWalkwayRedesign, PAVING_POOL),
  },
  {
    id: 'luxury-bathroom-finish',
    title: 'Luxury Bathroom Finish',
    category: 'Tiling',
    location: 'Gaborone, Gaborone West',
    scope:
      'High-end bathroom renovation featuring large-format marble-look tiles. The scope included underfloor heating preparation and a custom walk-in shower installation.',
    cover: luxuryBathroomFinish,
    images: buildGallery(luxuryBathroomFinish, TILING_POOL),
  },
];

export const projectCategories = ['All', 'Paving', 'Tiling', 'Hardscaping'];
