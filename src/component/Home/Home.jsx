import React, { useState } from "react";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      // For now just alert the search
      alert(`Searching for: ${searchQuery}`);
      // Later you can navigate or filter results here
    }
  };

  return (
    <section className="header" id="safar">
      {/* ✅ Only one slider */}
      <div className="slider">
        <div className="slide">
          <img
            src="/images/aaron-burden-aRya3uMiNIA-unsplash.jpg"
            alt="Slide 1"
          />
        </div>
        <div className="slide">
          <img
            src="/images/ales-krivec-N-aTikX-b00-unsplash.jpg"
            alt="Slide 2"
          />
        </div>
        <div className="slide">
          <img
            src="/images/marc-zimmer-yktwU2t1qHA-unsplash.jpg"
            alt="Slide 3"
          />
        </div>
        <div className="slide">
          <img
            src="/images/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"
            alt="Slide 4"
          />
        </div>
        <div className="slide">
          <img
            src="/images/luca-bravo-O453M2Liufs-unsplash.jpg"
            alt="Slide 5"
          />
        </div>
        <div className="slider-overlay"></div>
      </div>

      {/* ✅ Text & Search Section */}
      <div className="text-box">
        <h1 className="typing">
          Safar-e-Pak by <span>GhoomFir</span>
        </h1>
        <p>
          Discover the breathtaking landscapes and rich cultural heritage of
          Pakistan.
        </p>

        {/* Search form */}
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            className="search-box"
            placeholder="Search destinations, trips..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {/* <button type="submit" className="search-btn">
            🔍
          </button> */}
        </form>
      </div>
    </section>
  );
}

export default Home;
