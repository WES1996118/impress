// Cloud and health configuration

module.exports = {
  name:       'PrivateCloud', // cloud name
  type:       'server',   // cloud instance type: standalone, controller, server
  controller: 'tcp://127.0.0.1',    // cloud controller IP address
  pubSubPort: 3000,           // bublisher/subscriber port
  reqResPort: 3001,           // request/reply port
  health:     '2s'            // health monitoring interval
};