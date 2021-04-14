  require('dotenv').config();
  /**
   * TODO(developer): Uncomment this variable and replace with your
   *   Google Analytics 4 property ID before running the sample.
   */
  const propertyId = '260663529';

  // Imports the Google Analytics Data API client library.
  const {BetaAnalyticsDataClient} = require('@google-analytics/data');

  // Using a default constructor instructs the client to use the credentials
  // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
  const analyticsDataClient = new BetaAnalyticsDataClient();

  // Runs a simple report.
  async function runReport() {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [{ "startDate": "7daysAgo", "endDate": "yesterday" }],
      dimensions: [
        {
            name: "country"
        },
        {
            name: "region"
        },
        {
            name: 'city',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
        {
          name: 'newUsers',
        },
        {
          name: 'totalRevenue',
        },
      ],
      dimensionFilter: {
        filter: {
          fieldName: 'countryId',
          stringFilter: {
            value: 'Korea'
          }
        }
      }
    });

    console.log('Report result:');
    // response.rows.forEach(row => {
    //   console.log(row.dimensionValues[0], row.metricValues[0]);
    // });
    console.log(JSON.stringify(response.rows));
  }

  runReport();