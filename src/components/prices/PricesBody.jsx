export default function PricesBody() {

  return (
    <>
      <div className="left-content">
        <p>Please note that all prices are inclusive of:</p>
        <ul>
          <li>Gas Central Heating & Hot Water</li>
          <li>Electricity</li>
          <li>Water rates</li>
          <li>Council Tax</li>
          <li>Weekly linen/cleaning service</li>
          <li>Broadband internet</li>
          <li>High Definition satelite TV and catch-up services</li>
        </ul>
        <p>The weekly rental charge is dependent on the length of your stay; if you book longer, the weekly rate is lower.</p>
        <p>The table below summarises the rents and the pre-payment terms.</p>
      </div>
      <table className="price-table">
        <thead>
          <tr>
            <th>Duration</th>
            <th>Notice Period</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 wk</td>
            <td>Pay 1 week in advance</td>
            <td>£500/wk</td>
          </tr>
          <tr>
            <td>2-4 wks</td>
            <td>Pay 1 week in advance</td>
            <td>£470/wk</td>
          </tr>
          <tr>
            <td>5+ wks</td>
            <td>Pay 2 weeks in advance</td>
            <td>£440/wk</td>
          </tr>
        </tbody>
      </table>
      <div className="left-content">
        <p>Note that these prices assume 2 people staying. Any additional people will be charged an extra £10 per night.</p>
        <p>Weeks are assumed to run from weekend to weekend (i.e. Friday-to-Friday, Saturday-to-Saturday or Sunday-to-Sunday). Partial weeks are generally charged as a full week (depending on surrounding bookings).</p>
        <p>We ask for a deposit to be paid to confirm your booking which is then deducted from your final week's rent. The first set of rent is due when you move in (either 1 or 2 weeks worth, depending on your length of stay) and then 1 extra week's rent is due each subsequent week until your final payment 1 or 2 weeks prior to departure.</p>


      </div>
    </>
  );
}

