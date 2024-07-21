import React, { useState, useEffect } from 'react';

const ScholarshipPage = () => {
    // State variables for filtering
    const [regionCountryFilter, setRegionCountryFilter] = useState("Any Country");
    const [degreeTypeFilter, setDegreeTypeFilter] = useState("Any Degree Type");
    const [fundingTypeFilter, setFundingTypeFilter] = useState("Any Funding Type");
    
    // State variable for storing scholarship data
    const [scholarships, setScholarships] = useState([]);

    // Function to fetch scholarship data
    const fetchScholarships = async () => {
        // Construct query parameters based on filters
        const queryParams = new URLSearchParams({
            region: regionCountryFilter,
            degreeType: degreeTypeFilter,
            fundingType: fundingTypeFilter,
        });

        // Fetch scholarship data from backend API
        try {
            const response = await fetch(`/api/scholarships?${queryParams}`);
            const data = await response.json();
            setScholarships(data);
        } catch (error) {
            console.error('Error fetching scholarship data:', error);
        }
    };

    // Effect hook to fetch scholarships on component mount
    useEffect(() => {
        fetchScholarships();
    }, []);

    // Function to handle region/country filter change
    const handleRegionCountryFilterChange = (event) => {
        setRegionCountryFilter(event.target.value);
    };

    // Function to handle degree type filter change
    const handleDegreeTypeFilterChange = (event) => {
        setDegreeTypeFilter(event.target.value);
    };

    // Function to handle funding type filter change
    const handleFundingTypeFilterChange = (event) => {
        setFundingTypeFilter(event.target.value);
    };

    // Function to handle search button click
    const handleSearch = () => {
        fetchScholarships();
    };

    return (
        <div>
            <h1>Opportunities</h1>
            {/* Filters */}
            <div>
                <label htmlFor="regionCountryFilter">Region/Country:</label>
                <select id="regionCountryFilter" value={regionCountryFilter} onChange={handleRegionCountryFilterChange}>
                    <option value="Any Country">Any Country</option>
                    <option value="UK">UK</option>
                    <option value="Germany">Germany</option>
                    <option value="Australia">Australia</option>
                    {/* Add more options for region/country */}
                </select>
            </div>
            <div>
                <label htmlFor="degreeTypeFilter">Degree Type:</label>
                <select id="degreeTypeFilter" value={degreeTypeFilter} onChange={handleDegreeTypeFilterChange}>
                    <option value="Any Degree Type">Any Degree Type</option>
                    <option value="Master">Master</option>
                    <option value="Bachelor">Bachelor</option>
                    {/* Add more options for degree types */}
                </select>
            </div>
            <div>
                <label htmlFor="fundingTypeFilter">Funding Type:</label>
                <select id="fundingTypeFilter" value={fundingTypeFilter} onChange={handleFundingTypeFilterChange}>
                    <option value="Any Funding Type">Any Funding Type</option>
                    <option value="Full Funded">Full Funded</option>
                    <option value="Partial Funded">Partial Funded</option>
                    {/* Add more options for funding types */}
                </select>
            </div>
            {/* Search Button */}
            <button onClick={handleSearch}>Search</button>
            {/* Scholarship List */}
            <div>
                {scholarships.map(scholarship => (
                    // Render each scholarship item based on filters
                    <div key={scholarship.id}>
                        <h2>{scholarship.name}</h2>
                        <p>Region: {scholarship.region}</p>
                        <p>Degree Type: {scholarship.degreeType}</p>
                        <p>Funding Type: {scholarship.fundingType}</p>
                        <img src={scholarship.imageUrl} alt={scholarship.name} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ScholarshipPage;
