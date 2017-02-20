# Initial Setup

[MongoDB.org](https://www.mongodb.org/dl/win32/x86_64-2008plus-ssl?_ga=1.192889902.524643510.1485972341)
    look for this version:

`win32/mongodb-win32-x86_64-2008plus-ssl-3.2.10-signed.msi`

    Download it and install. Should take a matter of minutes.

[Runing MongoDB](https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/#run-mongodb-community-edition)

    MongoDB requires a data directory to store all data. MongoDB’s default data 
    directory path is the absolute path \data\db on the drive from which you 
    start MongoDB. Create this folder by running the following command in 
    a Command Prompt:

`md \data\db`

    Note, the data\db folder can not be seen in the directory you created in, it will
    be found in the root directory.  

    On the 2nd phase of Running MongoDB you will ned to start MongoDB by running
    mongod.exe from your Command Prompt:

`"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe"`

    In subsequent restarts of the DB, you will need to redo the same Runing sequence.
    Note, the version 3.2 needs to be the same version you are using. If you are 
    going to use a different version, that exact number must mirror the new instance.

[Robomongo](robomongo.org)
    You should go to the Download section and download the 0.9.0v.
    It will prompt a choice for either an installer or a portable version.
    I personally choice the portable, allowing me to flexibly remove.

    It will download a zip file which you will need to extract. 
    I extracted it to Desktop. Inside locate the Robomongo.exe file
    and run it. Inside you will need to press the create button and 
    fill in the fields. Defaults are set to localhose and 27017. The 
    name for the connection is not an issue and can be anything you
    would like. Accept and then connect. 

# Re-Running MongoDB Instance

All you need to do in the is reinitialize the Robomongo connection and run 
the mongod.exe file through your cmd. 

`"C:\Program Files\MongoDB\Server\3.2\bin\mongod.exe"`

## errors

If you come by an error specifying that your directoryPerDB is not matching the boolean
value of the mongod.exe instance; You might need to check the version you had downloaded
or redo the setup. Version 3.4.10, had not worked for me as it was already preconfigured with
WiredTiger Storage Engine. Please pay attention to the automization that is done, as the data/db
directory gets created at root directory.
