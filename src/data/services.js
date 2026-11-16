import drivewayPaving from '../../assets/drive way paving .webp';
import indoorOutdoorTiling from '../../assets/indoor and outdoor tiling.webp';
import stoneCladding from '../../assets/stone clading.webp';
import retainingWalls from '../../assets/Custom Flagstone Steps.webp';
import poolSurrounds from '../../assets/Luxury Pool Deck.webp';
import commercialPaving from '../../assets/Commercial Driveway.jpg';

export const services = [
  {
    id: 'driveway-paving',
    title: 'Driveway Paving',
    category: 'Paving',
    image: drivewayPaving,
    alt: 'Aerial view of a newly paved residential driveway',
    summary:
      'Durable, attractive driveways using block paving, clay bricks, or natural stone — designed for vehicle weight and the Botswana sun.',
    description:
      "Durable, attractive driveways using block paving, clay bricks, or natural stone. Designed to handle vehicle weight and Botswana's harsh sun.",
  },
  {
    id: 'indoor-outdoor-tiling',
    title: 'Indoor & Outdoor Tiling',
    category: 'Tiling',
    image: indoorOutdoorTiling,
    alt: 'Precision finished bathroom tiling',
    summary:
      'Precision tiling for kitchens, bathrooms, patios and pool surrounds, with slip-resistant finishes for outdoor safety.',
    description:
      'Flawless tiling for floors, walls, and stairs. Whether indoor or outdoor, we guarantee precision cuts, slip-resistant finishes, and unmatched durability.',
  },
  {
    id: 'stone-cladding',
    title: 'Stone Cladding',
    category: 'Hardscaping',
    image: stoneCladding,
    alt: 'Natural stone cladding on an exterior feature wall',
    summary:
      "Add texture and warmth to your home's exterior or interior walls with natural and manufactured stone.",
    description:
      'Custom stone cladding and architectural features. We elevate your outdoor living space with stunning, structural stonework.',
  },
  {
    id: 'retaining-walls',
    title: 'Retaining Walls',
    category: 'Hardscaping',
    image: retainingWalls,
    alt: 'Tiered stone retaining wall and garden steps',
    summary:
      'Expertly built retaining walls that manage soil erosion and create functional, tiered outdoor spaces.',
    description:
      'Expertly built retaining walls to manage soil erosion and create functional, tiered outdoor spaces in sloped gardens.',
  },
  {
    id: 'pool-surrounds',
    title: 'Pool Surrounds',
    category: 'Paving',
    image: poolSurrounds,
    alt: 'Slip-resistant paving around a luxury swimming pool',
    summary:
      'Safe, non-slip paving and tiling for pools that look luxurious and stay cool underfoot in hot African summers.',
    description:
      'Safe, non-slip paving and tiling for swimming pools that look luxurious and stay cool underfoot during hot African summers.',
  },
  {
    id: 'commercial-paving',
    title: 'Commercial Paving',
    category: 'Paving',
    image: commercialPaving,
    alt: 'Heavy-duty commercial block paving',
    summary:
      'Heavy-duty paving for parking lots, business entrances and walkways — minimal downtime, maximum durability.',
    description:
      'Heavy-duty paving solutions for parking lots, business entrances, and walkways. Minimal downtime and maximum durability for your business.',
  },
];

export const homeServices = services.slice(0, 3).map((service, index) => ({
  ...service,
  description: [
    'Expert installation of driveways, walkways, and patios. We use premium brick, block, and flagstone engineered to endure heavy traffic and extreme weather.',
    'Flawless tiling for floors, walls, and stairs. Whether indoor or outdoor, we guarantee precision cuts, slip-resistant finishes, and unmatched durability.',
    'Custom stone cladding, retaining walls, and architectural features. We elevate your outdoor living space with stunning, structural stonework.',
  ][index],
}));
