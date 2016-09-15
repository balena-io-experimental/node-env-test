#!/bin/env node
{
    'use strict';
    var addr,cmd,path;
    addr = process.env.RESIN_SUPERVISOR_ADDRESS + "/v1/shutdown";
    cmd = "?apikey=" + process.env.RESIN_SUPERVISOR_API_KEY;
    path = process.env.PATH;
    
    console.log("Address: "+addr+'\n');
    console.log("CMD: "+cmd+'\n');
    console.log("PATH: "+path+'\n\n');
    console.log("ENV: ",process.env);
}
