# Variables-simulator-in-JSON-format
Variable simulator in JSON format

This code defines a function simulateIoTDevice that simulates an IoT device generating data. The data consists of a random temperature and humidity value, as well as a timestamp. The function then outputs the data in JSON format using the JSON.stringify function.

The code then sets up an interval that calls the simulateIoTDevice function every 1000 milliseconds (1 second), simulating the IoT device generating data at regular intervals.

You can adjust the interval at which the data is generated, as well as the values being generated, to suit your needs.

Here is an example of the output you might see when running this code:

![1](https://user-images.githubusercontent.com/112094136/208047048-bf74e891-f68f-4c96-bb2f-3f373d6ac302.png)

<pre>
{
  "data": {
    "device": "Simulated Device",
    "temperature": 0.1664888691253159,
    "humidity": 48.558540827731164,
    "lightLevel": 5.048608427174585,
    "timestamp": 1671174354099
  }
}
</pre>
