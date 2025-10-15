/**
https://www.youtube.com/watch?v=QI5WRCdp0vs 

kafka 
 real time data streaming.  
 kafka use in delivery, stock price, health monitor 

 what is kafka ? 
 kafka is distributed streaming platform. 
 allow application to send, store, and process data in real time
 e.g. 
 spotify, netflix 
 kafka is helpful for sending data in bulk . 
 
 -----------------------------------------------------------------------------
 why was kafka created ? 

 benefit of using kafka ?
scalability : handle large amount of data 
fault tolerance : replication of data 
high throughput : capable of processing millions of messages per second. 
durability : reliable storage of messages. 

---------------------------------------------------------------------------

key component of kafka? 
topics 
producers
consumer 
brokers 
partitions 
zookeeper/ kraft 
-----------------------------------------------------------------------------------
kafka broker 
when we run kafka, we start one or more 'broker' processes . it is basically the server (or node) in kafka cluster. 

main functionality:
stores messages 
handle read/write requests 

running instance of kafka is called kafka broker or kafka server . 
-----------------------------------------------------------------------------------

kafka topic : 
kafka topic is like a 'channel' or 'category' where messages (data) are published . think of it as a folder that holds all the messages  belonging to a specific  stream of data 

when we send a message to kafka, we choose which topic  to send it to . 
consumer  then subscribe to that topic to receive the messages . 


-----------------------------------------------------------------------------------
kafka producer and consumer 
producer: 
an application or process   that send events to kafka topics. producers write data to kafka  . 

consumer : 
an applciation or process that reads events from kafka topics . 
consumers subscribe to topics and processs the data . 

-----------------------------------------------------------------------------------
some systems that can act as a producers for kafka : 
sql or nosql database 
rest apis
    log aggregators 
    message queue 
    stream processsing frameworks 
    IOT devices and sensor 
    data integration tools 
    custom application 
    data analytics and bi tools 

-----------------------------------------------------------------------------------
kafka producers can be built using : 
kafka connect (jdbc, debezium, http source) 

custom producers (node,js pythan) 
open-source agents  
-----------------------------------------------------------------------------------
kafka partition : 
a partition is a subsection of a kafka topic. topics can have multiple partition so data  can be spread out across brokers . 

each partiton maintains a sequential order of messages , allowing parallel read and write for higher performance 


-----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------
-----------------------------------------------------------------------------------



























 */