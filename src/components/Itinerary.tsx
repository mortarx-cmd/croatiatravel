const Itinerary = () => {
  const days = [
    {
      day: 1,
      date: "Thursday, June 19",
      title: "Stockholm to Split to Hvar",
      activities: [
        {
          time: "Morning",
          title: "Departure",
          details: [
            "Flight from Stockholm Arlanda to Split (direct options available with SAS or Norwegian)",
            "Recommended flight: Morning departure to arrive in Split by early afternoon"
          ]
        },
        {
          time: "Afternoon",
          title: "Arrival & Transfer to Hvar",
          details: [
            "Arrival at Split Airport",
            "Transfer to Split Ferry Port (30-minute taxi ride)",
            "Afternoon catamaran to Hvar Town (1-hour journey)",
            "Check-in at Adriana Hvar Spa Hotel (luxury option) or Villa Nora Hvar (boutique option)"
          ]
        },
        {
          time: "Evening",
          title: "Hvar Town Exploration",
          details: [
            "Leisurely walk through Hvar Town's marble streets",
            "Welcome dinner at Gariful or Dalmatino (upscale seafood restaurants)",
            "Sunset cocktails at Top Bar with panoramic views of the harbor"
          ]
        }
      ]
    },
    {
      day: 2,
      date: "Friday, June 20",
      title: "Hvar Island Exploration",
      activities: [
        {
          time: "Morning",
          title: "Historical Tour",
          details: [
            "Breakfast at hotel",
            "Guided walking tour of Hvar Town (2 hours)",
            "St. Stephen's Square and Cathedral",
            "Hvar Theatre (Europe's oldest public theater)",
            "Franciscan Monastery and museum",
            "Fortica (Spanish Fortress) with panoramic views"
          ]
        },
        {
          time: "Afternoon",
          title: "Wine Experience",
          details: [
            "Lunch at a local konoba (traditional restaurant)",
            "Private wine tour to Jelsa and Stari Grad (4 hours)",
            "Visit to Tomić Winery for wine tasting",
            "Tour of UNESCO-protected Stari Grad Plain",
            "Visit to Lacman Family winery for natural wine tasting with local delicacies"
          ]
        },
        {
          time: "Evening",
          title: "Leisure",
          details: [
            "Return to Hvar Town",
            "Dinner at Passarola or Giaxa (fine dining options)",
            "Evening stroll along the promenade"
          ]
        }
      ]
    },
    {
      day: 3,
      date: "Saturday, June 21",
      title: "Hvar Water Adventures",
      activities: [
        {
          time: "Morning",
          title: "Pakleni Islands Excursion",
          details: [
            "Breakfast at hotel",
            "Private boat tour to Pakleni Islands (half-day)",
            "Swimming and snorkeling in secluded bays",
            "Visit to Palmižana for beach time",
            "Snorkeling at Blue Lagoon"
          ]
        },
        {
          time: "Afternoon",
          title: "Beach Relaxation",
          details: [
            "Lunch at Laganini Lounge Bar on Palmižana",
            "Continue exploring Pakleni Islands",
            "Return to Hvar Town"
          ]
        },
        {
          time: "Evening",
          title: "Sunset Experience",
          details: [
            "Special Romantic Surprise: Private sunset sailing trip with champagne and canapés",
            "Dinner at Restaurant Zori on St. Clement Island (accessible by water taxi)",
            "Return to Hvar Town"
          ]
        }
      ]
    },
    {
      day: 4,
      date: "Sunday, June 22",
      title: "Hvar to Brač",
      activities: [
        {
          time: "Morning",
          title: "Transfer to Brač",
          details: [
            "Breakfast at hotel and check-out",
            "Morning catamaran from Hvar to Bol, Brač (approximately 1 hour)",
            "Check-in at Hotel Lemongarden (luxury option) or Villa Giardino (boutique option)"
          ]
        },
        {
          time: "Afternoon",
          title: "Zlatni Rat Beach",
          details: [
            "Lunch at Ranč restaurant",
            "Beach time at the famous Zlatni Rat (Golden Horn) beach",
            "Optional water sports: windsurfing, paddleboarding, or jet skiing"
          ]
        },
        {
          time: "Evening",
          title: "Bol Exploration",
          details: [
            "Walking tour of Bol's historic center",
            "Wine tasting at Stina Winery on the waterfront",
            "Dinner at Taverna Riva with sea views"
          ]
        }
      ]
    },
    {
      day: 5,
      date: "Monday, June 23",
      title: "Brač Island Adventure",
      activities: [
        {
          time: "Morning",
          title: "Island Interior",
          details: [
            "Breakfast at hotel",
            "Buggy excursion to Vidova Gora, the highest peak in the Adriatic (3 hours)",
            "Panoramic views of surrounding islands",
            "Visit to Blaca Monastery, a hidden gem built into the cliff",
            "Olive oil tasting at a local producer"
          ]
        },
        {
          time: "Afternoon",
          title: "Coastal Exploration",
          details: [
            "Lunch at a traditional konoba in Škrip village",
            "Visit to the Stone Masonry School in Pučišća",
            "Swimming at Lovrečina Bay, a sandy beach with ancient Roman ruins"
          ]
        },
        {
          time: "Evening",
          title: "Culinary Experience",
          details: [
            "Return to Bol",
            "Cooking class featuring traditional Dalmatian cuisine",
            "Dinner enjoying your prepared meal with paired local wines"
          ]
        }
      ]
    },
    {
      day: 6,
      date: "Tuesday, June 24",
      title: "Brač to Korčula",
      activities: [
        {
          time: "Morning",
          title: "Transfer to Korčula",
          details: [
            "Breakfast at hotel and check-out",
            "Morning catamaran from Bol to Korčula Town (approximately 1.5 hours)",
            "Check-in at Lesić Dimitri Palace (luxury option) or Hotel Korsal (boutique option)"
          ]
        },
        {
          time: "Afternoon",
          title: "Korčula Town Exploration",
          details: [
            "Lunch at Konoba Mate",
            "Guided tour of Korčula Old Town (2 hours)",
            "Marco Polo's alleged birthplace",
            "St. Mark's Cathedral",
            "Town Museum",
            "Ancient city walls and towers"
          ]
        },
        {
          time: "Evening",
          title: "Cultural Experience",
          details: [
            "Traditional Moreška sword dance performance (if available)",
            "Dinner at LD Restaurant or Filippi (fine dining options)",
            "Evening walk along the illuminated medieval walls"
          ]
        }
      ]
    },
    {
      day: 7,
      date: "Wednesday, June 25",
      title: "Korčula to Dubrovnik",
      activities: [
        {
          time: "Morning",
          title: "Korčula Countryside",
          details: [
            "Breakfast at hotel",
            "Half-day tour of Lumbarda village",
            "Visit to Bire Winery to taste Grk wine (indigenous grape variety)",
            "Relaxation at sandy Lumbarda beaches",
            "Visit to local artisan workshops"
          ]
        },
        {
          time: "Afternoon",
          title: "Transfer to Dubrovnik",
          details: [
            "Lunch at Konoba Maha in Žrnovo village",
            "Afternoon catamaran from Korčula to Dubrovnik (approximately 2 hours)",
            "Check-in at Hotel Excelsior (luxury option) or Villa Dubrovnik (boutique option)"
          ]
        },
        {
          time: "Evening",
          title: "Dubrovnik Experience",
          details: [
            "Sunset walk along Dubrovnik's city walls",
            "Farewell dinner at Restaurant 360° or Proto (fine dining options)",
            "Evening stroll through illuminated Old Town"
          ]
        }
      ]
    },
    {
      day: 8,
      date: "Thursday, June 26",
      title: "Departure (or Optional Extension)",
      activities: [
        {
          time: "Morning",
          title: "Departure",
          details: [
            "Breakfast at hotel and check-out",
            "Transfer to Dubrovnik Airport",
            "Flight from Dubrovnik to Gothenburg (direct or with connection)"
          ]
        },
        {
          time: "Alternative",
          title: "Flexible Return Option",
          details: [
            "Extend stay in Dubrovnik for 1-2 days",
            "Explore Old Town, take Game of Thrones tour, visit Lokrum Island",
            "Return flight on June 27 or 28 to Gothenburg"
          ]
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">7-Day Croatian Island Itinerary</h2>
      
      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Budget Range: $2,500-5,000</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li><span className="font-medium">Flights:</span> $600-900 per person</li>
          <li><span className="font-medium">Accommodations:</span> $1,000-1,800 (mix of luxury and boutique)</li>
          <li><span className="font-medium">Activities & Tours:</span> $400-700 per person</li>
          <li><span className="font-medium">Meals & Dining:</span> $350-600 per person</li>
          <li><span className="font-medium">Transportation (ferries, taxis):</span> $150-300 per person</li>
          <li><span className="font-medium">Miscellaneous (souvenirs, etc.):</span> $100-200 per person</li>
        </ul>
      </div>
      
      {days.map((day) => (
        <div key={day.day} className="mb-8 border-b pb-6">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg">
            <h3 className="text-xl font-bold">Day {day.day}: {day.date}</h3>
            <p className="text-lg">{day.title}</p>
          </div>
          
          <div className="bg-white shadow-md rounded-b-lg overflow-hidden">
            {day.activities.map((activity, index) => (
              <div 
                key={index} 
                className={`p-4 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <h4 className="text-lg font-semibold text-blue-700">{activity.time} - {activity.title}</h4>
                <ul className="mt-2 space-y-1">
                  {activity.details.map((detail, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Itinerary;
