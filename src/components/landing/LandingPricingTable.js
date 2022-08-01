import React from 'react';
import './LandingPricingTable.scss';

const LandingPricingTable = () => {
  return (
    <div className='pricing-table'>
      <div className='pricing-table__row--feature'>
        <span>Stream live PPV events and Dark (Elevation) tapings</span>
      </div>
      <div className='pricing-table__row'>
        <div className='pricing-table__col'>
          <span>✓</span>
        </div>
        <div className='pricing-table__col'>
          <span>✓</span>
        </div>
      </div>
      {/* <tbody>
        <tr>
          <td>Monthly Price</td>
          <td>$4.99/month</td>
          <td>$6.99/month</td>
        </tr>
        <tr>
          <td>Stream live PPV events and Dark (Elevation) tapings</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>Access Dynamite and Rampage tapings one week after they air</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>Instant access to entire YouTube library</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>Watch on your TV, PC, phone, or tablet</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>Support up to 3 devices</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>No ads from any third-party source</td>
          <td>✓</td>
          <td>✓</td>
        </tr>
        <tr>
          <td>Download any media to your device</td>
          <td></td>
          <td>✓</td>
        </tr>
      </tbody> */}
    </div>
  );
};

export default LandingPricingTable;
