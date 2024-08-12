import React, { useState, useEffect } from 'react';
import './ArtGallery.css';
// Sample artworks data with specific image URLs
const initialArtworks = [
  {
    id: 1,
    title: 'Sunset Bliss',
    artist: 'Jane Doe',
    imageUrl: 'https://i.pinimg.com/736x/09/76/20/0976204139fdcba9e51d91a5dc5f342e.jpg',
    description: 'A beautiful painting capturing the essence of a sunset.',
    price: 150,
    date: '01/01/2024',
    category: 'Painting'
  },
  {
    id: 2,
    title: 'Abstract Sculptor',
    artist: 'John Smith',
    imageUrl: 'https://i.pinimg.com/564x/33/ba/3e/33ba3e810b78ca59991fc308c406fb7c.jpg',
    description: 'A striking abstract sculpture made from recycled materials.',
    price: 300,
    date: '02/01/2024',
    category: 'Sculpture'
  },
  {
    id: 3,
    title: 'City Lights',
    artist: 'Emily Davis',
    imageUrl: 'https://i.pinimg.com/564x/3c/c8/31/3cc831ed6b3cf2c7bcf0d5a11b43e5a6.jpg',
    description: 'A vibrant photograph of a bustling city at night.',
    price: 200,
    date: '03/01/2024',
    category: 'Photography'
  },
  {
    id: 4,
    title: 'Nature\'s Harmony',
    artist: 'Michael Brown',
    imageUrl: 'https://i.pinimg.com/564x/72/9f/c2/729fc2b93a783fef68f499142feaaad7.jpg',
    description: 'A serene painting of a tranquil forest landscape.',
    price: 250,
    date: '04/01/2024',
    category: 'Painting'
  },
  {
    id: 5,
    title: 'Modern Art',
    artist: 'Anna Wilson',
    imageUrl: 'https://i.pinimg.com/564x/26/2b/c4/262bc41bb6361f852caa115d57aff7c2.jpg',
    description: 'An innovative modern art piece exploring geometric shapes.',
    price: 350,
    date: '05/01/2024',
    category: 'Sculpture'
  },
  {
    id: 6,
    title: 'Ocean Waves',
    artist: 'Liam Johnson',
    imageUrl: 'https://i.pinimg.com/564x/2d/26/4f/2d264fb451d72ebe7333204819f7d9d2.jpg',
    description: 'A mesmerizing painting of ocean waves crashing against the shore.',
    price: 180,
    date: '06/01/2024',
    category: 'Painting'
  },
  {
    id: 7,
    title: 'Steel Abstract',
    artist: 'Olivia Martinez',
    imageUrl: 'https://i.pinimg.com/564x/57/44/98/574498fbb836a2ecdeb4fadb2222ab30.jpg',
    description: 'A contemporary sculpture made of polished steel.',
    price: 400,
    date: '07/01/2024',
    category: 'Sculpture'
  },
  {
    id: 8,
    title: 'Vintage Car',
    artist: 'James Anderson',
    imageUrl: 'https://i.pinimg.com/736x/e1/79/94/e1799455843117edf493a913c464ba4d.jpg',
    description: 'A nostalgic photograph of a classic vintage car.',
    price: 220,
    date: '08/01/2024',
    category: 'Photography'
  },
  {
    id: 9,
    title: 'Starry Night',
    artist: 'Sophia Lee',
    imageUrl: 'https://i.pinimg.com/736x/d3/c3/e5/d3c3e5df1202c8f302b0b5156e9a2297.jpg',
    description: 'A stunning painting inspired by Van Gogh\'s famous work.',
    price: 300,
    date: '09/01/2024',
    category: 'Painting'
  },
  {
    id: 10,
    title: 'Clay Figure',
    artist: 'William Thomas',
    imageUrl: 'https://i.pinimg.com/564x/4e/7f/62/4e7f62f78d93ef4eca26cb87b9a2151c.jpg',
    description: 'A detailed sculpture crafted from clay.',
    price: 250,
    date: '10/01/2024',
    category: 'Sculpture'
  },
  {
    id: 11,
    title: 'Urban Jungle',
    artist: 'Ava Wilson',
    imageUrl: 'https://i.pinimg.com/564x/b6/3d/e3/b63de3ee2d79625f4f04e2c006d597e3.jpg',
    description: 'A captivating photograph of a vibrant urban scene.',
    price: 270,
    date: '11/01/2024',
    category: 'Photography'
  },
  {
    id: 12,
    title: 'The Mountain Peak',
    artist: 'Ethan Harris',
    imageUrl: 'https://i.pinimg.com/564x/31/a9/ee/31a9ee7da31c089659f803fd2321d10a.jpg',
    description: 'A breathtaking painting of a mountain peak covered in snow.',
    price: 320,
    date: '12/01/2024',
    category: 'Painting'
  },
  {
    id: 13,
    title: 'Abstract Forms',
    artist: 'Mia Clark',
    imageUrl: 'https://i.pinimg.com/564x/43/89/3f/43893f43117f0c1020bdf02dc05fdb2b.jpg',
    description: 'A collection of abstract forms and colors in sculpture.',
    price: 370,
    date: '13/01/2024',
    category: 'Sculpture'
  },
  {
    id: 14,
    title: 'Reflections',
    artist: 'Lucas Hall',
    imageUrl: 'https://i.pinimg.com/564x/de/6c/de/de6cde25a16dacc76d123e2100e0fabe.jpg',
    description: 'A thought-provoking photograph of reflections in water.',
    price: 210,
    date: '14/01/2024',
    category: 'Photography'
  },
  {
    id: 15,
    title: 'Autumn Leaves',
    artist: 'Isabella Adams',
    imageUrl: 'https://i.pinimg.com/736x/11/4d/7e/114d7e32020ff9e6748df352b939dcc3.jpg',
    description: 'A warm painting capturing the colors of autumn leaves.',
    price: 230,
    date: '15/01/2024',
    category: 'Painting'
  },
  {
    id: 16,
    title: 'Industrial Design',
    artist: 'Noah Wright',
    imageUrl: 'https://i.pinimg.com/736x/f8/44/4f/f8444fbea9bd1a6b4873817a2933b72e.jpg',
    description: 'A modern sculpture reflecting industrial design elements.',
    price: 390,
    date: '16/01/2024',
    category: 'Sculpture'
  },
  {
    id: 17,
    title: 'Mountain Lake',
    artist: 'Ella Baker',
    imageUrl: 'https://i.pinimg.com/564x/1d/93/32/1d93328f76d4b26ab292fd1c4fc469f0.jpg',
    description: 'A serene photograph of a lake nestled in the mountains.',
    price: 260,
    date: '17/01/2024',
    category: 'Photography'
  },
  {
    id: 18,
    title: 'Whimsical Dreams',
    artist: 'Oliver Young',
    imageUrl: 'https://i.pinimg.com/564x/28/8f/69/288f691e479be8fb2e1c41476e3efb2a.jpg',
    description: 'A whimsical painting full of dreamlike imagery.',
    price: 290,
    date: '18/01/2024',
    category: 'Painting'
  },
  {
    id: 19,
    title: 'Glass Art',
    artist: 'Charlotte Hernandez',
    imageUrl: 'https://i.pinimg.com/564x/67/34/89/67348924362ee831cc183fce12c5fce4.jpg',
    description: 'An intricate sculpture made from colored glass.',
    price: 420,
    date: '19/01/2024',
    category: 'Sculpture'
  },
  {
    id: 20,
    title: 'Night Sky',
    artist: 'Jack Thompson',
    imageUrl: 'https://i.pinimg.com/736x/6f/66/39/6f6639f427f40643babb35d04234761a.jpg',
    description: 'A stunning photograph of the night sky filled with stars.',
    price: 280,
    date: '20/01/2024',
    category: 'Photography'
  },
  {
    id: 21,
    title: 'Desert Mirage',
    artist: 'Amelia Martinez',
    imageUrl: 'https://i.pinimg.com/564x/97/62/cf/9762cf8ad7157cd03d55ac2eb474e57d.jpg',
    description: 'A painting depicting a mirage in the desert landscape.',
    price: 300,
    date: '21/01/2024',
    category: 'Painting'
  },
  {
    id: 22,
    title: 'Metallic Fusion',
    artist: 'Henry Wilson',
    imageUrl: 'https://i.pinimg.com/564x/3a/70/1c/3a701c55521dd5f52690e9d68b65c848.jpg',
    description: 'A futuristic sculpture combining various metallic elements.',
    price: 450,
    date: '22/01/2024',
    category: 'Sculpture'
  },
  {
    id: 23,
    title: 'Nature\'s Elegance',
    artist: 'Grace Lewis',
    imageUrl: 'https://i.pinimg.com/564x/bb/bb/78/bbbb78c3aa6a7e7fe90db8b821714e48.jpg',
    description: 'A detailed photograph capturing the elegance of nature.',
    price: 230,
    date: '23/01/2024',
    category: 'Photography'
  },
  {
    id: 24,
    title: 'Star Light',
    artist: 'Liam Walker',
    imageUrl: 'https://i.pinimg.com/564x/07/8f/64/078f6452dd22a97bf05019b7eedb050d.jpg',
    description: 'A mesmerizing painting depicting a star-lit night sky.',
    price: 320,
    date: '24/01/2024',
    category: 'Painting'
  },
  {
    id: 25,
    title: 'Geometric Balance',
    artist: 'Emily Green',
    imageUrl: 'https://example.com/images/geometric_balance.jpg',
    description: 'An abstract sculpture exploring geometric balance and form.',
    price: 370,
    date: '25/01/2024',
    category: 'Sculpture'
  },
  {
    id: 26,
    title: 'Cityscape Dreams',
    artist: 'Ethan Carter',
    imageUrl: 'https://static.vecteezy.com/system/resources/previews/002/042/714/original/dramatic-city-sunset-sky-vector.jpg',
    description: 'A dramatic photograph of a cityscape at dusk.',
    price: 250,
    date: '26/01/2024',
    category: 'Photography'
  },
  {
    id: 27,
    title: 'Golden Horizon',
    artist: 'Olivia Brown',
    imageUrl: 'https://example.com/images/golden_horizon.jpg',
    description: 'A beautiful painting capturing the golden horizon at sunset.',
    price: 270,
    date: '27/01/2024',
    category: 'Painting'
  },
  {
    id: 28,
    title: 'Elegant Curves',
    artist: 'Daniel King',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR49uHgEa7zSo6CI3YH6YlBFk_mZRMZSkLJVg&s',
    description: 'A smooth, elegant sculpture with flowing curves.',
    price: 390,
    date: '28/01/2024',
    category: 'Sculpture'
  },
  {
    id: 29,
    title: 'Urban Reflections',
    artist: 'Sophia Lee',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg7Ef063cp7FgknpzTGlbDNAEXIKu0n-FWog&s',
    description: 'A vivid photograph capturing reflections in urban environments.',
    price: 220,
    date: '29/01/2024',
    category: 'Photography'
  },
  {
    id: 30,
    title: 'Eternal Peace',
    artist: 'Alexander Young',
    imageUrl: 'https://example.com/images/eternal_peace.jpg',
    description: 'A calming painting of a peaceful landscape at dawn.',
    price: 340,
    date: '30/01/2024',
    category: 'Painting'
  },
  
];

const ArtGallery = () => {
  const [artworks, setArtworks] = useState(initialArtworks);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Simulating an API call with placeholder data
    const fetchArtworks = async () => {
      // In a real application, you would fetch data from an API
      // Here we're using placeholder data
      setArtworks(initialArtworks);
    };
    fetchArtworks();
  }, []);

  // Filtering artworks by category and search term
  const filteredArtworks = artworks.filter(artwork => {
    const matchesCategory = categoryFilter === 'All' || artwork.category === categoryFilter;
    const matchesSearch = artwork.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const indexOfLastArtwork = currentPage * itemsPerPage;
  const indexOfFirstArtwork = indexOfLastArtwork - itemsPerPage;
  const currentArtworks = filteredArtworks.slice(indexOfFirstArtwork, indexOfLastArtwork);

  const totalPages = Math.ceil(filteredArtworks.length / itemsPerPage);

  const handleCategoryChange = (e) => {
    setCategoryFilter(e.target.value);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="art-gallery">
      <header className="gallery-header">
        <h1>Art Gallery</h1>
        <div className="filter-section">
          <input
            type="text"
            placeholder="Search artworks..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <select onChange={handleCategoryChange} value={categoryFilter}>
            <option value="All">All Categories</option>
            <option value="Painting">Painting</option>
            <option value="Sculpture">Sculpture</option>
            <option value="Photography">Photography</option>
          </select>
        </div>
      </header>
      <div className="artworks-list">
        {currentArtworks.map(artwork => (
          <div key={artwork.id} className="artwork-card">
            <img src={artwork.imageUrl} alt={artwork.title} />
            <h2>{artwork.title}</h2>
            <p><strong>Artist:</strong> {artwork.artist}</p>
            <p><strong>Description:</strong> {artwork.description}</p>
            <p><strong>Price:</strong> ${artwork.price}</p>
            <p><strong>Date:</strong> {artwork.date}</p>
            <p><strong>Category:</strong> {artwork.category}</p>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
