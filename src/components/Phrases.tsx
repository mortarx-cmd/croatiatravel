const Phrases = () => {
  const phraseSections = [
    {
      title: "Greetings & Basics",
      phrases: [
        { croatian: "Bok", pronunciation: "bohk", english: "Hello (informal)" },
        { croatian: "Dobar dan", pronunciation: "doh-bar dahn", english: "Good day/Hello (formal)" },
        { croatian: "Dobro jutro", pronunciation: "doh-broh yoo-troh", english: "Good morning" },
        { croatian: "Dobra večer", pronunciation: "doh-brah veh-cher", english: "Good evening" },
        { croatian: "Doviđenja", pronunciation: "doh-vee-jen-yah", english: "Goodbye" },
        { croatian: "Da", pronunciation: "dah", english: "Yes" },
        { croatian: "Ne", pronunciation: "neh", english: "No" },
        { croatian: "Molim", pronunciation: "moh-leem", english: "Please" },
        { croatian: "Hvala", pronunciation: "hva-lah", english: "Thank you" },
        { croatian: "Nema na čemu", pronunciation: "neh-mah nah cheh-moo", english: "You're welcome" },
        { croatian: "Oprostite", pronunciation: "oh-pros-tee-teh", english: "Excuse me" },
        { croatian: "Žao mi je", pronunciation: "zhow mee yeh", english: "Sorry" },
        { croatian: "Živjeli!", pronunciation: "zhee-vyeh-lee", english: "Cheers!" }
      ]
    },
    {
      title: "Travel & Directions",
      phrases: [
        { croatian: "Gdje je...?", pronunciation: "g-dyeh yeh", english: "Where is...?" },
        { croatian: "Koliko košta?", pronunciation: "koh-lee-koh kosh-tah", english: "How much is it?" },
        { croatian: "Trajekt", pronunciation: "try-ekt", english: "Ferry" },
        { croatian: "Katamaran", pronunciation: "kah-tah-mah-rahn", english: "Catamaran" },
        { croatian: "Plaža", pronunciation: "plah-zhah", english: "Beach" },
        { croatian: "Hotel", pronunciation: "hoh-tel", english: "Hotel" },
        { croatian: "Restoran", pronunciation: "res-toh-rahn", english: "Restaurant" },
        { croatian: "Lijevo", pronunciation: "lee-yeh-voh", english: "Left" },
        { croatian: "Desno", pronunciation: "des-noh", english: "Right" },
        { croatian: "Ravno", pronunciation: "rav-noh", english: "Straight ahead" },
        { croatian: "Blizu", pronunciation: "blee-zoo", english: "Near" },
        { croatian: "Daleko", pronunciation: "dah-leh-koh", english: "Far" },
        { croatian: "Trajektna luka", pronunciation: "try-ekt-nah loo-kah", english: "Ferry port" }
      ]
    },
    {
      title: "Dining & Food",
      phrases: [
        { croatian: "Jelovnik, molim", pronunciation: "yeh-lov-neek, moh-leem", english: "Menu, please" },
        { croatian: "Voda", pronunciation: "voh-dah", english: "Water" },
        { croatian: "Vino", pronunciation: "vee-noh", english: "Wine" },
        { croatian: "Crno vino", pronunciation: "tsr-noh vee-noh", english: "Red wine" },
        { croatian: "Bijelo vino", pronunciation: "bee-yeh-loh vee-noh", english: "White wine" },
        { croatian: "Pivo", pronunciation: "pee-voh", english: "Beer" },
        { croatian: "Kava", pronunciation: "kah-vah", english: "Coffee" },
        { croatian: "Doručak", pronunciation: "doh-roo-chak", english: "Breakfast" },
        { croatian: "Ručak", pronunciation: "roo-chak", english: "Lunch" },
        { croatian: "Večera", pronunciation: "veh-cheh-rah", english: "Dinner" },
        { croatian: "Račun, molim", pronunciation: "rah-choon, moh-leem", english: "Bill, please" },
        { croatian: "Ukusno", pronunciation: "oo-koos-noh", english: "Delicious" }
      ]
    },
    {
      title: "Romance & Special Occasions",
      phrases: [
        { croatian: "Lijepo", pronunciation: "lee-yeh-poh", english: "Beautiful" },
        { croatian: "Volim te", pronunciation: "voh-leem teh", english: "I love you" },
        { croatian: "Sretna godišnjica", pronunciation: "sret-nah go-deesh-nyee-tsah", english: "Happy anniversary" },
        { croatian: "Romantično", pronunciation: "roh-man-teech-noh", english: "Romantic" },
        { croatian: "Zalazak sunca", pronunciation: "zah-lah-zak soon-tsah", english: "Sunset" },
        { croatian: "Živjeli mi", pronunciation: "zhee-vyeh-lee mee", english: "Cheers to us" },
        { croatian: "Nazdravimo ljubavi", pronunciation: "naz-drah-vee-moh lyoo-bah-vee", english: "A toast to love" }
      ]
    },
    {
      title: "Emergency & Health",
      phrases: [
        { croatian: "Upomoć!", pronunciation: "oo-poh-moch", english: "Help!" },
        { croatian: "Trebam liječnika", pronunciation: "treh-bahm lee-yech-nee-kah", english: "I need a doctor" },
        { croatian: "Bolnica", pronunciation: "bol-nee-tsah", english: "Hospital" },
        { croatian: "Ljekarna", pronunciation: "lyek-ar-nah", english: "Pharmacy" },
        { croatian: "Policija", pronunciation: "poh-lee-tsee-yah", english: "Police" },
        { croatian: "Ne osjećam se dobro", pronunciation: "neh os-yeh-cham seh dob-roh", english: "I don't feel well" }
      ]
    },
    {
      title: "Island Hopping Phrases",
      phrases: [
        { croatian: "Kada je sljedeći trajekt?", pronunciation: "kah-dah yeh slyeh-deh-chee try-ekt", english: "When is the next ferry?" },
        { croatian: "Jednu kartu za [island], molim", pronunciation: "yed-noo kar-too zah [island], moh-leem", english: "One ticket to [island], please" },
        { croatian: "Je li ovo trajekt za [island]?", pronunciation: "yeh lee oh-voh try-ekt zah [island]", english: "Is this the ferry to [island]?" },
        { croatian: "Koliko traje putovanje?", pronunciation: "koh-lee-koh trah-yeh poo-toh-vah-nyeh", english: "How long is the journey?" },
        { croatian: "Gdje mogu kupiti kartu?", pronunciation: "g-dyeh moh-goo koo-pee-tee kar-too", english: "Where can I buy a ticket?" },
        { croatian: "Ima li popust?", pronunciation: "ee-mah lee poh-poost", english: "Is there a discount?" }
      ]
    }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Essential Croatian Phrases</h2>
      
      <div className="mb-6 bg-blue-50 p-4 rounded-lg">
        <h3 className="text-xl font-semibold mb-2">Pronunciation Tips</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Croatian is pronounced as it's written - each letter has a consistent sound</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>The letter 'j' is pronounced like 'y' in "yes"</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>The letter 'c' is pronounced like 'ts' in "cats"</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>The letter 'r' is slightly rolled</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Stress is usually on the first syllable of the word</span>
          </li>
        </ul>
      </div>
      
      {phraseSections.map((section) => (
        <div key={section.title} className="mb-8">
          <h3 className="text-xl font-semibold mb-4 bg-blue-600 text-white p-2 rounded">{section.title}</h3>
          
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Croatian</th>
                    <th className="px-4 py-2 text-left">Pronunciation</th>
                    <th className="px-4 py-2 text-left">English</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {section.phrases.map((phrase, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-4 py-3 font-medium">{phrase.croatian}</td>
                      <td className="px-4 py-3 italic text-gray-600">{phrase.pronunciation}</td>
                      <td className="px-4 py-3">{phrase.english}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
      
      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
        <h3 className="text-lg font-semibold mb-2 text-yellow-800">Cultural Note</h3>
        <p>Croatians greatly appreciate when visitors make an effort to speak their language, even just a few basic phrases. "Hvala" (thank you) is one of the most appreciated words you can learn, and using it frequently will be met with smiles.</p>
      </div>
    </div>
  );
};

export default Phrases;
