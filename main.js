const simulateIoTDevice = () => {
    // simulate some data being generated by the IoT device
    const data = {
        data: {
            device: "Simulated Device",
            temperature: Math.random() * 2,
            humidity: Math.random() * 100,
            lightLevel: Math.random() * 50 - 25,
            timestamp: Date.now()
        }
    };

    // output the data in JSON format
    console.log(JSON.stringify(data));
};

// simulate the IoT device generating data every 1000 milliseconds (1 second)
setInterval(simulateIoTDevice, 1000);
