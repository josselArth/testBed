var fs = require('fs');
var csvWriter = require('csv-write-stream');
var sys = require('sys');
var exec = require('child_process').exec;
var i = 0;
var shift = 1;

// initialisation pour fichier

var date = new Date;
var toDay = date.getFullYear() + "-" +
    (date.getMonth() + 1)  + "-" +
    date.getDate();
var temperatureFile_sensIn = "temperature_sensIn_" + toDay + ".csv";
var humidityFile_sensIn = "humidity_sensIn_" + toDay + ".csv";
var accelerometerFile_sensIn = "accelerometer_sensIn_" + toDay + ".csv";
var audio_levelFile_sensIn = "audio_leve_sensIn_" + toDay + ".csv";
var gyroscopeFile_sensIn = "gyroscope_sensIn_" + toDay + ".csv";
var temperatureWriter_sensIn = csvWriter();
var humidityWriter_sensIn = csvWriter();
var accelerometerWriter_sensIn = csvWriter();
var gyroscopeWriter_sensIn = csvWriter();
var audio_levelWriter_sensIn = csvWriter();
var temperatureFile_sensOut = "temperature_sensOut_" + toDay + ".csv";
var humidityFile_sensOut = "humidity_sensOut_" + toDay + ".csv";
var accelerometerFile_sensOut = "accelerometer_sensOut_" + toDay + ".csv";
var audio_levelFile_sensOut = "audio_leve_sensOut_" + toDay + ".csv";
var gyroscopeFile_sensOut = "gyroscope_sensOut_" + toDay + ".csv";
var temperatureWriter_sensOut = csvWriter();
var humidityWriter_sensOut = csvWriter();
var accelerometerWriter_sensOut = csvWriter();
var gyroscopeWriter_sensOut = csvWriter();
var audio_levelWriter_sensOut = csvWriter();
var temperatureFile_sleep = "temperature_sleep_" + toDay + ".csv";
var humidityFile_sleep = "humidity_sleep_" + toDay + ".csv";
var accelerometerFile_sleep = "accelerometer_sleep_" + toDay + ".csv";
var audio_levelFile_sleep = "audio_leve_sleep_" + toDay + ".csv";
var gyroscopeFile_sleep = "gyroscope_sleep_" + toDay + ".csv";
var temperatureWriter_sleep = csvWriter();
var humidityWriter_sleep = csvWriter();
var accelerometerWriter_sleep = csvWriter();
var gyroscopeWriter_sleep = csvWriter();
var audio_levelWriter_sleep = csvWriter();
temperatureWriter_sensIn.pipe(fs.createWriteStream(temperatureFile_sensIn, {'flags': 'a'}));
humidityWriter_sensIn.pipe(fs.createWriteStream(humidityFile_sensIn, {'flags': 'a'}));
accelerometerWriter_sensIn.pipe(fs.createWriteStream(accelerometerFile_sensIn, {'flags': 'a'}));
gyroscopeWriter_sensIn.pipe(fs.createWriteStream(gyroscopeFile_sensIn, {'flags': 'a'}));
audio_levelWriter_sensIn.pipe(fs.createWriteStream(audio_levelFile_sensIn, {'flags': 'a'}));

temperatureWriter_sensOut.pipe(fs.createWriteStream(temperatureFile_sensOut, {'flags': 'a'}));
humidityWriter_sensOut.pipe(fs.createWriteStream(humidityFile_sensOut, {'flags': 'a'}));
accelerometerWriter_sensOut.pipe(fs.createWriteStream(accelerometerFile_sensOut, {'flags': 'a'}));
gyroscopeWriter_sensOut.pipe(fs.createWriteStream(gyroscopeFile_sensOut, {'flags': 'a'}));
audio_levelWriter_sensOut.pipe(fs.createWriteStream(audio_levelFile_sensOut, {'flags': 'a'}));

temperatureWriter_sleep.pipe(fs.createWriteStream(temperatureFile_sleep, {'flags': 'a'}));
humidityWriter_sleep.pipe(fs.createWriteStream(humidityFile_sleep, {'flags': 'a'}));
accelerometerWriter_sleep.pipe(fs.createWriteStream(accelerometerFile_sleep, {'flags': 'a'}));
gyroscopeWriter_sleep.pipe(fs.createWriteStream(gyroscopeFile_sleep, {'flags': 'a'}));
audio_levelWriter_sleep.pipe(fs.createWriteStream(audio_levelFile_sleep, {'flags': 'a'}));
var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyACM0', {
    parser: SerialPort.parsers.readline('\n')
});


//ecriture data temperature

function Write_temperature_data(tempH, tempL, modul)
{
    if (modul == 1)
    {
	//ecriture dans le fichier
	temperatureWriter_sensIn.write({
	    DATE: Date.now(),
	    TempH: tempH,
	    TempL: tempL
	})
	//data to dropbox
	child = exec("sudo /home/pi/Dropbox-Uploader/dropbox_uploader.sh upload ./" + temperatureFile_sensIn + " /" + temperatureFile_sensIne,
		     function (error, stdout, stderr) {
			 sys.print('stdout: ' + stdout);
			 sys.print('stderr: ' + stderr);
			 if (error !== null) {
			     console.log('exec error: ' + error);
			 }
		     });
    }
    else if (modul == 2)
    {
	temperatureWriter_sensOut.write({
	    DATE: Date.now(),
	    TempH: tempH,
	    TempL: tempL
	})
	child = exec("sudo /home/pi/Dropbox-Uploader/dropbox_uploader.sh upload ./" + temperatureFile_sensOut + " /" + temperatureFile_sensOut,
		     function (error, stdout, stderr) {
			 sys.print('stdout: ' + stdout);
			 sys.print('stderr: ' + stderr);
			 if (error !== null) {
			     console.log('exec error: ' + error);
			 }
		     });
    }
    else if (modul == 3)
    {
	temperatureWriter_sleep.write({
	    DATE: Date.now(),
	    TempH: tempH,
	    TempL: tempL
	})
	child = exec("sudo /home/pi/Dropbox-Uploader/dropbox_uploader.sh upload ./" + temperatureFile_sleep + " /" + temperatureFile_sleep,
		     function (error, stdout, stderr) {
			 sys.print('stdout: ' + stdout);
			 sys.print('stderr: ' + stderr);
			 if (error !== null) {
			     console.log('exec error: ' + error);
			 }
		     });
    }
}


//ecriture data humidity

function Write_humidity_data(humiH, humiL, modul)
{
    if (modul == 1)
    {
	humidityWriter_sensIn.write({
	    DATE: Date.now(),
	    HumiH: humiH,
	    HumiL: humiL
	})
	child = exec("sudo /home/pi/Dropbox-Uploader/dropbox_uploader.sh upload ./" + humidityFile_sensIn + " /" + humidityFile_sensIn,
		     function (error, stdout, stderr) {
			 sys.print('stdout: ' + stdout);
			 sys.print('stderr: ' + stderr);
			 if (error !== null) {
			     console.log('exec error: ' + error);
			 }
		     });
    }
    else if (modul == 2)
    {
	humidityWriter_sensOut.write({
	    DATE: Date.now(),
	    HumiH: humiH,
	    HumiL: humiL
	})
	child = exec("sudo /home/pi/Dropbox-Uploader/dropbox_uploader.sh upload ./" + humidityFile_sensOut + " /" + humidityFile_sensOut,
		     function (error, stdout, stderr) {
			 sys.print('stdout: ' + stdout);
			 sys.print('stderr: ' + stderr);
			 if (error !== null) {
			     console.log('exec error: ' + error);
			 }
		     });
    }
    else if (modul == 3)
    {
	humidityWriter_sleep.write({
	    DATE: Date.now(),
	    HumiH: humiH,
	    HumiL: humiL
	})
	child = exec("sudo /home/pi/Dropbox-Uploader/dropbox_uploader.sh upload ./" + humidityFile_sleep + " /" + humidityFile_sleep,
		     function (error, stdout, stderr) {
			 sys.print('stdout: ' + stdout);
			 sys.print('stderr: ' + stderr);
			 if (error !== null) {
			     console.log('exec error: ' + error);
			 }
		     });
    }   
}

//ecriture data accelerometer

function Write_accelerometer_data(accXH, accXL, accYH, accYL,accZH, accZL, modul)
{
    if (modul == 1)
    {
	accelerometerWriter_sensIn.write({
	    DATE: Date.now(),
	    accXH: accXH,
	    accXl: accXL,
	    accYH: accYH,
	    accYL: accYL,
	    accZH: accZH,
	    accZL: accZL
	})
    }
    else if (modul == 2)
    {
	accelerometerWriter_sensOut.write({
	    DATE: Date.now(),
	    accXH: accXH,
	    accXl: accXL,
	    accYH: accYH,
	    accYL: accYL,
	    accZH: accZH,
	    accZL: accZL
	})
    }
    else if (modul == 3)
    {
	accelerometerWriter_sleep.write({
	    DATE: Date.now(),
	    accXH: accXH,
	    accXl: accXL,
	    accYH: accYH,
	    accYL: accYL,
	    accZH: accZH,
	    accZL: accZL
	})
    }
}
//ecriture data gyroscope

function Write_gyroscope_data(gyroXH, gyroXL, gyroYH, gyroYL,gyroZH, gyroZ, modul)
{
    if (modul == 1)
    {
	gyroscopeWriter_sensIn.write({
	    DATE: Date.now(),
	    gyroXH: gyroXH,
	    gyroXl: gyroXL,
	    gyroYH: gyroYH,
	    gyroYL: gyroYL,
	    gyroZH: gyroZH,
	    gyroZL: gyroZL
	})
    }
    else if (modul == 2)
    {
	gyroscopeWriter_sensOut.write({
	    DATE: Date.now(),
	    gyroXH: gyroXH,
	    gyroXl: gyroXL,
	    gyroYH: gyroYH,
	    gyroYL: gyroYL,
	    gyroZH: gyroZH,
	    gyroZL: gyroZL
	})
    }
    else if (modul == 3)
    {
	gyroscopeWriter_sleep.write({
	    DATE: Date.now(),
	    gyroXH: gyroXH,
	    gyroXl: gyroXL,
	    gyroYH: gyroYH,
	    gyroYL: gyroYL,
	    gyroZH: gyroZH,
	    gyroZL: gyroZL
	})
    }
}

//ecriture data audio

function Write_audio_level_data(levelH, levelL, modul)
{
    if (modul == 1)
    {
	audio_levelWriter_sensIn.write({
	    DATE: Date.now(),
	    levelH: levelH,
	    levelL: levelL
	})
    }
    else if (modul == 2)
    {
	audio_levelWriter_sensOut.write({
	    DATE: Date.now(),
	    levelH: levelH,
	    levelL: levelL
	})
    }
    else if (modul == 3)
    {
	audio_levelWriter_sleep.write({
	    DATE: Date.now(),
	    levelH: levelH,
	    levelL: levelL
	})
    }
}

//lecture port serie

port.on('data', function(data){
    i = 0;
    if (data[0].charCodeAt >> 7 & 1) //sensor in
    {
	if (data[0].charCodeAt & 1) //temp
	    Write_temperature_data(data[i + 1], data[i + 2], 1);
	else if (data[0].charCodeAt(0) >> 1 & 1) //humidity
	    Write_humidity_data(data[i + 1], data[i + 2], 1);
	else if (data[0].charCodeAt(0) >> 2 & 1) //accel
	    Write_accelerometer_data(data[i + 1], data[i + 2], 1);
	else if (data[0].charCodeAt(0) >> 3 & 1) //gyro
	    Write_gyroscope_data(data[i + 1], data[i + 2], 1);
	else if (data[0].charCodeAt(0) >> 3 & 1) //sound
	    Write_sound_level_data(data[i + 1], data[i + 2], 1);
    }
    else if (data[0].charCodeAt >> 6 & 1) //sensor out
    {
	if (data[0].charCodeAt & 1) //temp
	    Write_temperature_data(data[i + 1], data[i + 2], 2);
	else if (data[0].charCodeAt(0) >> 1 & 1 ) //humidity 
	    Write_humidity_data(data[i + 1], data[i + 2], 2);
	else if (data[0].charCodeAt(0) >> 2 & 1) //accel
	    Write_accelerometer_data(data[i + 1], data[i + 2], 2);
	else if (data[0].charCodeAt(0) >> 3 & 1) //gyro
	    Write_gyroscope_data(data[i + 1], data[i + 2], 2);
	else if (data[0].charCodeAt(0) >> 3 & 1) //sound
	    Write_sound_level_data(data[i + 1], data[i + 2], 2);
    }
    else if (data[0].charCodeAt(0) >> 5 & 1) //sleepy
    {
	if (data[0].charCodeAt & 1) //temp
	    Write_temperature_data(data[i + 1], data[i + 2], 3);
	else if (data[0].charCodeAt(0) >> 1 & 1) //humidity
	    Write_humidity_data(data[i + 1], data[i + 2], 3);
	else if (data[0].charCodeAt(0) >> 2 & 1) //accel
	    Write_accelerometer_data(data[i + 1], data[i + 2], 3);
	else if (data[0].charCodeAt(0) >> 3 & 1) //gyro
	    Write_gyroscope_data(data[i + 1], data[i + 2], 3);
	else if (data[0].charCodeAt(0) >> 3 & 1) //sound
	    Write_sound_level_data(data[i + 1], data[i + 2], 3);
    }
});
