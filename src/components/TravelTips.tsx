const TravelTips = () => {
  const tipSections = [
    {
      title: "General Travel Tips",
      tips: [
        {
          subtitle: "Best Time to Visit",
          content: [
            "June (your travel time) is an excellent choice - warm weather, pre-peak crowds, and all services operational",
            "Average temperatures in June: 22-27°C (72-81°F)",
            "Water temperature in June: 21-23°C (70-73°F)",
            "Expect 13-14 hours of daylight with sunrise around 5:30 AM and sunset around 8:30 PM"
          ]
        },
        {
          subtitle: "Money & Payments",
          content: [
            "Currency: Croatia uses the Euro (€) as of January 2023",
            "Credit Cards: Widely accepted in hotels, restaurants, and larger establishments",
            "Cash: Keep some cash for small vendors, markets, and remote locations",
            "ATMs: Available in all towns on Hvar, Brač, and Korčula",
            "Tipping: 10% is customary for good service in restaurants; round up taxi fares"
          ]
        },
        {
          subtitle: "Connectivity",
          content: [
            "Wi-Fi: Available in most accommodations, restaurants, and cafes",
            "Mobile Coverage: Excellent in towns, may be spotty in remote areas",
            "SIM Cards: Available at Split and Dubrovnik airports (T-Mobile, A1, Telemach)",
            "Roaming: EU roaming agreements apply for European visitors"
          ]
        },
        {
          subtitle: "Transportation",
          content: [
            "Ferries: Arrive 30 minutes early for foot passenger ferries, 1 hour for car ferries",
            "Taxis: Available in all main towns; agree on price before departure for non-metered rides",
            "Rental Cars: Not necessary on Hvar but useful on Brač for exploring interior",
            "Scooters/Bikes: Popular rental options on all islands for short distances"
          ]
        }
      ]
    },
    {
      title: "Island-Specific Tips",
      tips: [
        {
          subtitle: "Hvar",
          content: [
            "Sun Protection: Hvar is known as the sunniest Croatian island - bring high SPF sunscreen",
            "Nightlife: If you want quiet evenings, stay away from Hvar Town center in high season",
            "Water: Tap water is safe to drink throughout the island",
            "Dress Code: Smart casual for upscale restaurants, especially in Hvar Town",
            "Hidden Beaches: Ask locals about Pokonji Dol and Dubovica beaches"
          ]
        },
        {
          subtitle: "Brač",
          content: [
            "Zlatni Rat Beach: Visit early morning or late afternoon to avoid crowds",
            "Wind Conditions: The northern side of the island is calmer if Zlatni Rat is windy",
            "Local Specialty: Try 'vitalac' - a traditional lamb dish unique to Brač",
            "Stone Masonry: The famous white stone of Brač was used in Diocletian's Palace and the White House",
            "Olive Oil: Don't leave without tasting the island's exceptional olive oil"
          ]
        },
        {
          subtitle: "Korčula",
          content: [
            "Marco Polo Connection: The island claims to be his birthplace - expect many references",
            "Wine: The indigenous Grk and Pošip white wines are must-tries",
            "Old Town Layout: Streets are arranged in a fishbone pattern to reduce wind and maximize air circulation",
            "Moreška Sword Dance: Try to catch this traditional performance held on Thursdays in summer",
            "Local Cuisine: Try žrnovski makaruni (hand-rolled pasta) with meat sauce"
          ]
        }
      ]
    },
    {
      title: "Practical Information",
      tips: [
        {
          subtitle: "Health & Safety",
          content: [
            "Emergency Number: 112 (unified European emergency number)",
            "Pharmacies: Called 'Ljekarna' - at least one in each main town",
            "Hospitals: Main facilities in Split and Dubrovnik; basic medical services on islands",
            "Safety: Croatia is generally very safe; normal precautions apply",
            "Sea Urchins: Wear water shoes when swimming from rocky areas"
          ]
        },
        {
          subtitle: "Cultural Etiquette",
          content: [
            "Greetings: A handshake is customary when meeting someone",
            "Language: While English is widely spoken in tourist areas, locals appreciate basic Croatian phrases",
            "Photography: Ask permission before photographing locals",
            "Church Visits: Modest dress required (covered shoulders and knees)",
            "Meal Times: Lunch is typically 12-2 PM, dinner starts around 8 PM"
          ]
        },
        {
          subtitle: "Packing Essentials",
          content: [
            "Adapter: Standard European two-pin plugs (type C/F)",
            "Footwear: Comfortable walking shoes for cobblestone streets",
            "Beach Gear: Water shoes, snorkeling equipment (can also be rented)",
            "Sun Protection: Hat, sunglasses, high SPF sunscreen",
            "Evening Wear: Light jacket or wrap for sea breezes",
            "Insect Repellent: Useful for evening dining outdoors"
          ]
        }
      ]
    },
    {
      title: "Food & Dining Tips",
      tips: [
        {
          subtitle: "Local Specialties",
          content: [
            "Peka: Meat or seafood slow-cooked under a bell-shaped lid",
            "Crni Rižot: Black risotto colored with cuttlefish ink",
            "Pašticada: Slow-cooked beef in special sauce with gnocchi",
            "Gregada: Fish stew traditional to Hvar",
            "Lavender: Hvar is famous for lavender products and honey"
          ]
        },
        {
          subtitle: "Dining Customs",
          content: [
            "Konoba: Traditional family-run restaurants serving authentic dishes",
            "Marenda: Mid-morning meal similar to brunch (11 AM-1 PM)",
            "Coffee Culture: Coffee breaks are a social institution; espresso is common",
            "Reservations: Recommended for upscale restaurants, especially in high season",
            "Local Wine: Each island has its own varieties - don't miss trying them"
          ]
        },
        {
          subtitle: "Budget Planning",
          content: [
            "Price Ranges: Budget meal: €10-15 per person; Mid-range restaurant: €20-30 per person; Upscale dining: €40-60+ per person",
            "Tourist vs. Local Spots: Prices can be 20-30% higher in tourist-centric locations",
            "Market Shopping: Local markets offer fresh produce at reasonable prices",
            "Set Menus: Many restaurants offer fixed price lunch menus that provide good value"
          ]
        }
      ]
    },
    {
      title: "Weather Contingency Plans",
      tips: [
        {
          subtitle: "Rainy Day Activities",
          content: [
            "Hvar: Visit the Arsenal and Theatre, Franciscan Monastery, or wine tasting",
            "Brač: Explore the Museum of Olive Oil, Stone Masonry School, or local museums",
            "Korčula: Visit Marco Polo's House, Town Museum, or Abbey Treasury",
            "Dubrovnik: Walk the city walls, visit museums, or enjoy the Game of Thrones tour"
          ]
        },
        {
          subtitle: "Wind Considerations",
          content: [
            "Bura (northeast wind): Can affect ferry operations; creates clear, cool conditions",
            "Jugo (southeast wind): Can bring rain and affect ferry schedules",
            "Maestral (northwest wind): Pleasant summer afternoon wind, good for sailing"
          ]
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Croatian Island Travel Tips</h2>
      
      {tipSections.map((section) => (
        <div key={section.title} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 bg-blue-600 text-white p-2 rounded">{section.title}</h3>
          
          {section.tips.map((tip, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden mb-4">
              <div className="bg-blue-50 p-3 border-b">
                <h4 className="text-lg font-semibold">{tip.subtitle}</h4>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {tip.content.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
      
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h3 className="text-lg font-semibold mb-2 text-yellow-800">Important Reminder</h3>
        <p>Check ferry company websites or call their information lines if weather looks questionable, as schedules may change. For the most up-to-date information, the Jadrolinija and Kapetan Luka websites are your best resources.</p>
      </div>
    </div>
  );
};

export default TravelTips;
