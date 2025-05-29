const Ferries = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Ferry & Flight Information</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 bg-blue-600 text-white p-2 rounded">Flight Details</h3>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <div className="bg-blue-50 p-4 border-b">
            <h4 className="text-lg font-semibold">Outbound: Stockholm Arlanda to Split</h4>
            <p className="text-sm text-gray-600">Thursday, June 19, 2025</p>
          </div>
          <div className="p-4">
            <p className="mb-2"><span className="font-medium">Recommended Airlines:</span> SAS, Norwegian</p>
            <p className="mb-2"><span className="font-medium">Flight Duration:</span> Approximately 2.5-3 hours (direct)</p>
            <p className="mb-2"><span className="font-medium">Typical Cost Range:</span> €150-250 per person</p>
            <p className="mb-2"><span className="font-medium">Recommended Arrival Time:</span> Before 2:00 PM to catch afternoon ferry to Hvar</p>
            <p className="mb-4"><span className="font-medium">Airport Transfer to Split Port:</span> 30 minutes by taxi (€30-40)</p>
            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
              <p className="text-sm font-medium text-yellow-800">Note: Book flights at least 2-3 months in advance for best rates. Direct flights are available but limited in frequency.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-50 p-4 border-b">
            <h4 className="text-lg font-semibold">Return: Dubrovnik to Gothenburg</h4>
            <p className="text-sm text-gray-600">Thursday, June 26, 2025 (or flexible until June 28)</p>
          </div>
          <div className="p-4">
            <p className="mb-2"><span className="font-medium">Recommended Airlines:</span> SAS, Norwegian, Lufthansa (with connection)</p>
            <p className="mb-2"><span className="font-medium">Flight Duration:</span> 3-5 hours (depending on connections)</p>
            <p className="mb-2"><span className="font-medium">Typical Cost Range:</span> €180-300 per person</p>
            <p className="mb-2"><span className="font-medium">Airport Transfer from Dubrovnik:</span> 30 minutes by taxi from Old Town (€30-40)</p>
            <p className="mb-4"><span className="font-medium">Flexible Options:</span> Return flights available on June 26, 27, or 28 as requested</p>
            <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
              <p className="text-sm font-medium text-yellow-800">Note: Direct flights to Gothenburg are limited. Consider flights with a short connection in major European hubs like Munich, Frankfurt, or Copenhagen.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 bg-blue-600 text-white p-2 rounded">Ferry Schedules (June 2025)</h3>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <div className="bg-blue-50 p-4 border-b">
            <h4 className="text-lg font-semibold">Split to Hvar</h4>
          </div>
          <div className="p-4">
            <p className="mb-2"><span className="font-medium">Frequency:</span> More than 10 daily departures in June</p>
            <p className="mb-2"><span className="font-medium">Journey Time:</span> Approximately 1 hour</p>
            <p className="mb-2"><span className="font-medium">Ticket Price Range:</span> €6-25</p>
            <p className="mb-2"><span className="font-medium">Operators:</span> Kapetan Luka, Jadrolinija, TP Line</p>
            <p className="mb-4"><span className="font-medium">Recommended Departure:</span> 16:30 catamaran from Split to Hvar Town</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Departure</th>
                    <th className="px-4 py-2 text-left">Arrival</th>
                    <th className="px-4 py-2 text-left">Operator</th>
                    <th className="px-4 py-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-2">09:15</td>
                    <td className="px-4 py-2">10:15</td>
                    <td className="px-4 py-2">Kapetan Luka</td>
                    <td className="px-4 py-2">Catamaran</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-4 py-2">11:30</td>
                    <td className="px-4 py-2">12:30</td>
                    <td className="px-4 py-2">Jadrolinija</td>
                    <td className="px-4 py-2">Catamaran</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">14:00</td>
                    <td className="px-4 py-2">15:00</td>
                    <td className="px-4 py-2">TP Line</td>
                    <td className="px-4 py-2">Catamaran</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-4 py-2">16:30</td>
                    <td className="px-4 py-2">17:30</td>
                    <td className="px-4 py-2">Kapetan Luka</td>
                    <td className="px-4 py-2">Catamaran</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">20:00</td>
                    <td className="px-4 py-2">21:00</td>
                    <td className="px-4 py-2">Jadrolinija</td>
                    <td className="px-4 py-2">Catamaran</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <div className="bg-blue-50 p-4 border-b">
            <h4 className="text-lg font-semibold">Hvar to Brač (Bol)</h4>
          </div>
          <div className="p-4">
            <p className="mb-2"><span className="font-medium">Frequency:</span> Multiple daily departures in June</p>
            <p className="mb-2"><span className="font-medium">Journey Time:</span> Approximately 1 hour</p>
            <p className="mb-2"><span className="font-medium">Ticket Price Range:</span> €5-20</p>
            <p className="mb-2"><span className="font-medium">Operators:</span> Jadrolinija, Kapetan Luka</p>
            <p className="mb-4"><span className="font-medium">Recommended Departure:</span> 09:30 catamaran from Hvar to Bol</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Departure</th>
                    <th className="px-4 py-2 text-left">Arrival</th>
                    <th className="px-4 py-2 text-left">Operator</th>
                    <th className="px-4 py-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-blue-50">
                    <td className="px-4 py-2">09:30</td>
                    <td className="px-4 py-2">10:30</td>
                    <td className="px-4 py-2">Kapetan Luka</td>
                    <td className="px-4 py-2">Catamaran</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2">15:45</td>
                    <td className="px-4 py-2">16:45</td>
                    <td className="px-4 py-2">Jadrolinija</td>
                    <td className="px-4 py-2">Catamaran</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
          <div className="bg-blue-50 p-4 border-b">
            <h4 className="text-lg font-semibold">Brač (Bol) to Korčula</h4>
          </div>
          <div className="p-4">
            <p className="mb-2"><span className="font-medium">Frequency:</span> Daily departures in June</p>
            <p className="mb-2"><span className="font-medium">Journey Time:</span> Approximately 1.5 hours</p>
            <p className="mb-2"><span className="font-medium">Ticket Price Range:</span> €10-25</p>
            <p className="mb-2"><span className="font-medium">Operators:</span> Kapetan Luka, Jadrolinija</p>
            <p className="mb-4"><span className="font-medium">Recommended Departure:</span> 10:15 catamaran from Bol to Korčula</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Departure</th>
                    <th className="px-4 py-2 text-left">Arrival</th>
                    <th className="px-4 py-2 text-left">Operator</th>
                    <th className="px-4 py-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-blue-50">
                    <td className="px-4 py-2">10:15</td>
                    <td className="px-4 py-2">11:45</td>
                    <td className="px-4 py-2">Kapetan Luka</td>
                    <td className="px-4 py-2">Catamaran</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-blue-50 p-4 border-b">
            <h4 className="text-lg font-semibold">Korčula to Dubrovnik</h4>
          </div>
          <div className="p-4">
            <p className="mb-2"><span className="font-medium">Frequency:</span> Multiple daily departures in June</p>
            <p className="mb-2"><span className="font-medium">Journey Time:</span> Approximately 2 hours</p>
            <p className="mb-2"><span className="font-medium">Ticket Price Range:</span> €15-30</p>
            <p className="mb-2"><span className="font-medium">Operators:</span> Jadrolinija, Kapetan Luka</p>
            <p className="mb-4"><span className="font-medium">Recommended Departure:</span> 15:30 catamaran from Korčula to Dubrovnik</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left">Departure</th>
                    <th className="px-4 py-2 text-left">Arrival</th>
                    <th className="px-4 py-2 text-left">Operator</th>
                    <th className="px-4 py-2 text-left">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-2">07:00</td>
                    <td className="px-4 py-2">09:00</td>
                    <td className="px-4 py-2">Jadrolinija</td>
                    <td className="px-4 py-2">Catamaran</td>
                  </tr>
                  <tr className="bg-blue-50">
                    <td className="px-4 py-2">15:30</td>
                    <td className="px-4 py-2">17:30</td>
                    <td className="px-4 py-2">Kapetan Luka</td>
                    <td className="px-4 py-2">Catamaran</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Important Ferry Notes</h3>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Ferry schedules are subject to change due to weather conditions. Always check the latest information before travel.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Arrive at least 30 minutes before departure for foot passenger ferries.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Tickets can be purchased online or at port ticket offices. Advance booking is recommended in high season.</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-500 mr-2">•</span>
            <span>Official ferry websites: <a href="#" className="text-blue-600 underline">Jadrolinija.hr</a>, <a href="#" className="text-blue-600 underline">KriljCruises.com</a></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Ferries;
