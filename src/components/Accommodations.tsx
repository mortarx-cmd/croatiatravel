const Accommodations = () => {
  const accommodations = [
    {
      island: 'Hvar',
      options: [
        {
          type: 'Luxury',
          name: 'Adriana Hvar Spa Hotel',
          description: 'Waterfront luxury hotel with rooftop pool and spa',
          features: [
            'Rooftop pool with panoramic views of the harbor',
            'Full-service spa with couples treatments',
            'Multiple dining options including rooftop restaurant',
            'Modern rooms with sea views',
            'Central location in Hvar Town'
          ],
          priceRange: '€250-450 per night',
          website: 'suncanihvar.com/adriana-hvar-spa-hotel.html'
        },
        {
          type: 'Boutique',
          name: 'Villa Nora Hvar',
          description: 'Historic boutique hotel in the heart of old town',
          features: [
            'Restored 14th-century palace',
            'Intimate setting with only 8 rooms',
            'Traditional stone architecture with modern amenities',
            'In-house restaurant serving local cuisine',
            'Steps away from St. Stephen\'s Square'
          ],
          priceRange: '€150-250 per night',
          website: 'villa-nora-hvar.com'
        }
      ]
    },
    {
      island: 'Brač',
      options: [
        {
          type: 'Luxury',
          name: 'Hotel Lemongarden',
          description: 'Elegant property with beautiful gardens in Sutivan',
          features: [
            'Boutique luxury hotel in a restored stone house',
            'Lush Mediterranean gardens',
            'Outdoor pool and private beach area',
            'Spa and wellness center',
            'Gourmet restaurant featuring local ingredients'
          ],
          priceRange: '€300-500 per night',
          website: 'lemongardenhotel.com'
        },
        {
          type: 'Boutique',
          name: 'Villa Giardino',
          description: 'Charming heritage hotel in Bol',
          features: [
            'Family-run boutique hotel',
            'Traditional Dalmatian architecture',
            'Peaceful garden terrace',
            'Walking distance to Zlatni Rat beach',
            'Personalized service and local recommendations'
          ],
          priceRange: '€120-220 per night',
          website: 'hotelvillagiardino.hr'
        }
      ]
    },
    {
      island: 'Korčula',
      options: [
        {
          type: 'Luxury',
          name: 'Lesić Dimitri Palace',
          description: 'Historic palace converted to luxury suites',
          features: [
            'Five unique residences within a restored 18th-century bishop\'s palace',
            'Each suite themed after Marco Polo\'s Silk Road travels',
            'LD Restaurant - one of Croatia\'s finest dining experiences',
            'Spa with traditional and Thai treatments',
            'Personalized concierge service'
          ],
          priceRange: '€350-600 per night',
          website: 'lesic-dimitri.com'
        },
        {
          type: 'Boutique',
          name: 'Hotel Korsal',
          description: 'Modern boutique hotel near the beach',
          features: [
            'Contemporary design with traditional elements',
            'Seafront location with beach access',
            'Outdoor pool and terrace',
            'Restaurant specializing in local seafood',
            '15-minute walk to Korčula Old Town'
          ],
          priceRange: '€130-230 per night',
          website: 'hotel-korsal.com'
        }
      ]
    },
    {
      island: 'Dubrovnik',
      options: [
        {
          type: 'Luxury',
          name: 'Hotel Excelsior',
          description: 'Historic luxury hotel with views of Old Town',
          features: [
            'Iconic 5-star hotel combining historic and contemporary wings',
            'Spectacular views of the Adriatic and Old Town walls',
            'Private beach and indoor pool',
            'Three restaurants and piano bar',
            'Spa and wellness center'
          ],
          priceRange: '€300-600 per night',
          website: 'adriaticluxuryhotels.com/hotel-excelsior-dubrovnik'
        },
        {
          type: 'Boutique',
          name: 'Villa Dubrovnik',
          description: 'Cliffside boutique hotel with private beach',
          features: [
            'Modern design built into the cliffside',
            'Private beach and sea-access bathing platform',
            'Rooftop prosciutto and wine bar',
            'Restaurant with panoramic views',
            'Complimentary vaporetto boat service to Old Town'
          ],
          priceRange: '€250-500 per night',
          website: 'villa-dubrovnik.hr'
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Recommended Accommodations</h2>
      
      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Accommodation Notes</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>All recommended properties have been selected based on your preference for a mix of luxury and boutique accommodations.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>June is high season in Croatia - booking at least 3-4 months in advance is strongly recommended.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Most properties offer free cancellation up to 7-14 days before arrival.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Consider booking directly with hotels for the best rates and potential room upgrades.</span>
          </li>
        </ul>
      </div>
      
      {accommodations.map((location) => (
        <div key={location.island} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 bg-blue-600 text-white p-2 rounded">{location.island} Accommodations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {location.options.map((option) => (
              <div key={option.name} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className={`p-4 ${option.type === 'Luxury' ? 'bg-amber-50' : 'bg-blue-50'}`}>
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-semibold">{option.name}</h4>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      option.type === 'Luxury' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {option.type}
                    </span>
                  </div>
                  <p className="text-gray-600 mt-1">{option.description}</p>
                </div>
                
                <div className="p-4">
                  <h5 className="font-medium mb-2">Key Features:</h5>
                  <ul className="space-y-1 mb-4">
                    {option.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex justify-between items-center pt-2 border-t">
                    <div>
                      <span className="text-sm font-medium">Price Range:</span>
                      <span className="ml-2 text-sm">{option.priceRange}</span>
                    </div>
                    <a 
                      href={`https://${option.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline text-sm"
                    >
                      Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accommodations;
