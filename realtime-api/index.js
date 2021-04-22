require('dotenv').config();

const propertyId = '260663529';

const {BetaAnalyticsDataClient} = require('@google-analytics/data');

  // Using a default constructor instructs the client to use the credentials
  // specified in GOOGLE_APPLICATION_CREDENTIALS environment variable.
  const analyticsDataClient = new BetaAnalyticsDataClient();

  async function runReport() {
      const [response] = await analyticsDataClient.runRealtimeReport({
          property: `properties/${propertyId}`,
          dimensions: [
              {
                  name: "deviceCategory"
              }
          ],
          metrics: [
              {
                  name: 'activeUsers'
              }
          ]
      });
    console.log(JSON.stringify(response.rows));
  }

  runReport();