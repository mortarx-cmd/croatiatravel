const Maps = () => {
  const maps = [
    {
      title: "Croatian Islands Overview",
      description: "Map showing the location of Hvar, Brač, and Korčula islands along the Dalmatian coast",
      imagePath: "/images/croatia_islands_map.gif",
      credit: "Map courtesy of Find-Croatia.com"
    },
    {
      title: "Hvar Island",
      description: "Detailed map of Hvar Island showing main towns, attractions, and beaches",
      imagePath: "/images/hvar_island_map.jpeg",
      credit: "Map courtesy of HvarInfo.com"
    },
    {
      title: "Brač Island",
      description: "Map of Brač Island with points of interest and transportation routes",
      imagePath: "/images/brac_island_map.jpeg",
      credit: "Map courtesy of BracInfo.com"
    },
    {
      title: "Korčula Island",
      description: "Detailed map of Korčula Island with main towns and attractions",
      imagePath: "/images/korcula_island_map.gif",
      credit: "Map courtesy of KorculaInfo.com"
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Maps</h2>
      
      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Map Usage Tips</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Download offline maps before your trip using Google Maps or Maps.me</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Ferry ports are marked with anchor symbols on most maps</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Blue road signs indicate coastal routes, while green signs are for main highways</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Distance on islands can be deceptive - winding roads make journeys longer than they appear</span>
          </li>
        </ul>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {maps.map((map, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-4 bg-blue-50 border-b">
              <h3 className="text-lg font-semibold">{map.title}</h3>
              <p className="text-sm text-gray-600">{map.description}</p>
            </div>
            <div className="p-4 flex justify-center">
              <img 
                src={map.imagePath} 
                alt={map.title} 
                className="max-w-full h-auto rounded"
                style={{ maxHeight: '400px' }}
              />
            </div>
            <div className="px-4 pb-4 text-sm text-gray-500 italic">
              {map.credit}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h3 className="text-lg font-semibold mb-2 text-yellow-800">Interactive Maps</h3>
        <p>For interactive maps during your trip, we recommend:</p>
        <ul className="mt-2 space-y-1">
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2">•</span>
            <span><strong>Google Maps</strong> - Best for general navigation and finding businesses</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2">•</span>
            <span><strong>Maps.me</strong> - Excellent offline maps with detailed hiking trails</span>
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2">•</span>
            <span><strong>Jadrolinija App</strong> - For ferry routes and real-time updates</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Maps;
