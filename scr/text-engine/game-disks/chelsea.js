const chelsea = {

    roomId: 'chel-1',//unique room identifier
    rooms: [
            
        //12th Ave
        {
            id:'12-34',
            name: 'Chelsea',
            desc:``,
            
            exits:[
                {
                    dir:['s','south'],
                    id: '12-33'
                },
                {
                    dir:['e','east'],
                    id:'11-34'
                },
                //leaves neighborhood
                {
                    dir:['n','north'],
                    id:'12-35'
                }
            ],
        },
        {
            id:'12-33',
            name: 'Chelsea',
            desc:``,

            exits:[
                {
                    dir:['s','south'],
                    id: '12-30'
                },
                {
                    dir:['e','east'],
                    id:'11-33'
                }
            ],
        },
        {
            id:'12-30',
            name: 'Chelsea',
            desc:``,

            exits:[
                {
                    dir:['s','south'],
                    id: '12-29'
                },
                {
                    dir:['e','east'],
                    id:'11-30'
                }
            ],
        },
        {
            id:'12-29',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '12-28'
                },
                {
                    dir:['e','east'],
                    id:'11-29'
                }
            ],
        },
        {
            id:'12-28',
            name: 'Chelsea',
            desc:``,

            exits:[
                {
                    dir:['s','south'],
                    id: '12-27'
                },
                {
                    dir:['e','east'],
                    id:'11-28'
                }
            ],
        },            
        {
            id:'12-27',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '12-26'
                },
                {
                    dir:['e','east'],
                    id:'11-27'
                }
            ],
        },
        {
            id:'12-26',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '12-25'
                },
                {
                    dir:['e','east'],
                    id:'11-26'
                }
            ],
        },
        {
            id:'12-25',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '12-24'
                },
                {
                    dir:['e','east'],
                    id:'11-25'
                }
            ],
        },
        {
            id:'12-24',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-23'
                },
                {
                    dir:['e','east'],
                    id:'11-24'
                }
            ],
        },
        //11th Ave.
        {
            id:'11-34',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-33'
                },
                {
                    dir:['e','east'],
                    id:'10-34'
                },
                {
                    dir:['w','west'],
                    id:'12-34'
                },
                //leaves neighborhood.
                {
                    dir:['n','north'],
                    id:'11-35'
                }
            ],
        },
        {
            id:'11-33',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-33'
                },
                {
                    dir:['e','east'],
                    id:'10-33'
                },
                {
                    dir:['w','west'],
                    id:'12-33'
                },
                {
                    dir:['n','north'],
                    id:'11-34'
                }
            ],
        },
        {
            id:'11-30',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-29'
                },
                {
                    dir:['e','east'],
                    id:'10-30'
                },
                {
                    dir:['w','west'],
                    id:'12-30'
                },
                {
                    dir:['n','north'],
                    id:'11-33'
                }
            ],
        },
        {
            id:'11-29',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-28'
                },
                {
                    dir:['e','east'],
                    id:'10-29'
                },
                {
                    dir:['w','west'],
                    id:'12-29'
                },
                {
                    dir:['n','north'],
                    id:'11-30'
                }
            ],
        },
        {
            id:'11-28',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-27'
                },
                {
                    dir:['e','east'],
                    id:'10-28'
                },
                {
                    dir:['w','west'],
                    id:'12-28'
                },
                {
                    dir:['n','north'],
                    id:'11-29'
                }
            ],
        },
        {
            id:'11-27',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-26'
                },
                {
                    dir:['e','east'],
                    id:'10-27'
                },
                {
                    dir:['w','west'],
                    id:'12-27'
                },
                {
                    dir:['n','north'],
                    id:'11-28'
                }
            ],
        },
        {
            id:'11-26',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-25'
                },
                {
                    dir:['e','east'],
                    id:'10-26'
                },
                {
                    dir:['w','west'],
                    id:'12-26'
                },
                {
                    dir:['n','north'],
                    id:'11-27'
                }
            ],
        },
        {
            id:'11-25',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-24'
                },
                {
                    dir:['e','east'],
                    id:'10-25'
                },
                {
                    dir:['w','west'],
                    id:'12-25'
                },
                {
                    dir:['n','north'],
                    id:'11-26'
                }
            ],
        },
        {
            id:'11-24',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-23'
                },
                {
                    dir:['e','east'],
                    id:'10-24'
                },
                {
                    dir:['w','west'],
                    id:'12-24'
                },
                {
                    dir:['n','north'],
                    id:'11-25'
                }
            ],
        },        
        {
            id:'11-23',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-22'
                },
                {
                    dir:['e','east'],
                    id:'10-23'
                },
                {
                    dir:['n','north'],
                    id:'11-24'
                }
            ],
        },        
        {
            id:'11-22',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-21'
                },
                {
                    dir:['e','east'],
                    id:'10-22'
                },
                {
                    dir:['n','north'],
                    id:'11-23'
                }
            ],
        },        
        {
            id:'11-21',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-20'
                },
                {
                    dir:['e','east'],
                    id:'10-21'
                },
                {
                    dir:['n','north'],
                    id:'11-22'
                }
            ],
        },        
        {
            id:'11-20',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-19'
                },
                {
                    dir:['e','east'],
                    id:'10-20'
                },
                {
                    dir:['n','north'],
                    id:'11-21'
                }
            ],
        },        
        {
            id:'11-19',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-18'
                },
                {
                    dir:['e','east'],
                    id:'10-19'
                },
                {
                    dir:['n','north'],
                    id:'11-20'
                }
            ],
        },        
        {
            id:'11-18',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-17'
                },
                {
                    dir:['e','east'],
                    id:'10-18'
                },
                {
                    dir:['n','north'],
                    id:'11-19'
                }
            ],
        },        
        {
            id:'11-17',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-16'
                },
                {
                    dir:['e','east'],
                    id:'10-17'
                },
                {
                    dir:['n','north'],
                    id:'11-18'
                }
            ],
        },        
        {
            id:'11-16',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-15'
                },
                {
                    dir:['e','east'],
                    id:'10-16'
                },
                {
                    dir:['n','north'],
                    id:'11-17'
                }
            ],
        },        
        {
            id:'11-15',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '11-14'
                },
                {
                    dir:['e','east'],
                    id:'10-15'
                },
                {
                    dir:['n','north'],
                    id:'11-16'
                }
            ],
        },        
        {
            id:'11-14',
            name: 'Chelsea',
            desc:``,         
            exits:[
                {
                    dir:['s','south'],
                    id: '11-13'
                },
                {
                    dir:['e','east'],
                    id:'10-14'
                },
                {
                    dir:['n','north'],
                    id:'11-15'
                }
            ],
        },
        //10th Ave
        {
            id:'10-34',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-33'
                },
                {
                    dir:['e','east'],
                    id:'9-34'
                },
                {
                    dir:['w','west'],
                    id:'11-34'
                },
                {
                    dir:['n','north'],
                    id:'10-35'
                }
            ],
        },
        {
            id:'10-33',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-31'
                },
                {
                    dir:['e','east'],
                    id:'9-33'
                },
                {
                    dir:['w','west'],
                    id:'11-33'
                },
                {
                    dir:['n','north'],
                    id:'10-34'
                }
            ],
        },
        {
            id:'10-31',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-30'
                },
                {
                    dir:['e','east'],
                    id:'9-31'
                },
                {
                    dir:['w','west'],
                    id:'11-31'
                },
                {
                    dir:['n','north'],
                    id:'10-33'
                }
            ],
        },
        {
            id:'10-30',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-29'
                },
                {
                    dir:['e','east'],
                    id:'9-30'
                },
                {
                    dir:['w','west'],
                    id:'11-30'
                },
                {
                    dir:['n','north'],
                    id:'10-31'
                }
            ],
        },
        {
            id:'10-29',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-28'
                },
                {
                    dir:['e','east'],
                    id:'9-29'
                },
                {
                    dir:['w','west'],
                    id:'11-29'
                },
                {
                    dir:['n','north'],
                    id:'10-30'
                }
            ],
        },
        {
            id:'10-28',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-27'
                },
                {
                    dir:['e','east'],
                    id:'9-28'
                },
                {
                    dir:['w','west'],
                    id:'11-28'
                },
                {
                    dir:['n','north'],
                    id:'10-29'
                }
            ],
        },
        {
            id:'10-27',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-26'
                },
                {
                    dir:['e','east'],
                    id:'9-27'
                },
                {
                    dir:['w','west'],
                    id:'11-27'
                },
                {
                    dir:['n','north'],
                    id:'10-28'
                }
            ],
        },
        {
            id:'10-26',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-25'
                },
                {
                    dir:['e','east'],
                    id:'9-26'
                },
                {
                    dir:['w','west'],
                    id:'11-26'
                },
                {
                    dir:['n','north'],
                    id:'10-27'
                }
            ],
        },
        {
            id:'10-25',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-24'
                },
                {
                    dir:['e','east'],
                    id:'9-25'
                },
                {
                    dir:['w','west'],
                    id:'11-25'
                },
                {
                    dir:['n','north'],
                    id:'10-26'
                }
            ],
        },
        {
            id:'10-24',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-23'
                },
                {
                    dir:['e','east'],
                    id:'9-24'
                },
                {
                    dir:['w','west'],
                    id:'11-24'
                },
                {
                    dir:['n','north'],
                    id:'10-25'
                }
            ],
        },
        {
            id:'10-23',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-22'
                },
                {
                    dir:['e','east'],
                    id:'9-23'
                },
                {
                    dir:['w','west'],
                    id:'11-23'
                },
                {
                    dir:['n','north'],
                    id:'10-24'
                }
            ],
        },
        {
            id:'10-22',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-21'
                },
                {
                    dir:['e','east'],
                    id:'9-22'
                },
                {
                    dir:['w','west'],
                    id:'11-22'
                },
                {
                    dir:['n','north'],
                    id:'10-23'
                }
            ],
        },
        {
            id:'10-21',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-20'
                },
                {
                    dir:['e','east'],
                    id:'9-21'
                },
                {
                    dir:['w','west'],
                    id:'11-21'
                },
                {
                    dir:['n','north'],
                    id:'10-22'
                }
            ],
        },
        {
            id:'10-20',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-19'
                },
                {
                    dir:['e','east'],
                    id:'9-20'
                },
                {
                    dir:['w','west'],
                    id:'11-20'
                },
                {
                    dir:['n','north'],
                    id:'10-21'
                }
            ],
        },
        {
            id:'10-19',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-18'
                },
                {
                    dir:['e','east'],
                    id:'9-19'
                },
                {
                    dir:['w','west'],
                    id:'11-19'
                },
                {
                    dir:['n','north'],
                    id:'10-20'
                }
            ],
        },
        {
            id:'10-17',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-16'
                },
                {
                    dir:['e','east'],
                    id:'9-17'
                },
                {
                    dir:['w','west'],
                    id:'11-17'
                },
                {
                    dir:['n','north'],
                    id:'10-18'
                }
            ],
        },
        {
            id:'10-16',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-15'
                },
                {
                    dir:['e','east'],
                    id:'9-16'
                },
                {
                    dir:['w','west'],
                    id:'11-16'
                },
                {
                    dir:['n','north'],
                    id:'10-17'
                }
            ],
        },
        {
            id:'10-15',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '10-14'
                },
                {
                    dir:['e','east'],
                    id:'9-15'
                },
                {
                    dir:['w','west'],
                    id:'11-15'
                },
                {
                    dir:['n','north'],
                    id:'10-16'
                }
            ],
        },
        {
            id:'10-14',
            name: 'Chelsea',
            desc:``,
            exits:[
                //leaves neighborhood
                {
                    dir:['s','south'],
                    id: '10-13'
                },
                {
                    dir:['e','east'],
                    id:'9-14'
                },
                {
                    dir:['w','west'],
                    id:'11-14'
                },
                {
                    dir:['n','north'],
                    id:'10-15'
                }
            ],
        },
        //9th Ave
        {
            id:'27-26',
            name: '',
            desc:``,
        },
        {
            id:'9-34',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-33'
                },
                {
                    dir:['e','east'],
                    id:'8-34'
                },
                {
                    dir:['w','west'],
                    id:'10-34'
                },
                //leaves neighborhood
                {
                    dir:['n','north'],
                    id:'9-35'
                }
            ],
        },
        {
            id:'9-33',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-31'
                },
                {
                    dir:['e','east'],
                    id:'8-33'
                },
                {
                    dir:['w','west'],
                    id:'10-33'
                },
                {
                    dir:['n','north'],
                    id:'9-34'
                }
            ],
        },

        {
            id:'9-31',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-30'
                },
                {
                    dir:['e','east'],
                    id:'8-31'
                },
                {
                    dir:['w','west'],
                    id:'10-31'
                },
                {
                    dir:['n','north'],
                    id:'9-33'
                }
            ],
        },

        {
            id:'9-30',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-29'
                },
                {
                    dir:['e','east'],
                    id:'8-30'
                },
                {
                    dir:['w','west'],
                    id:'10-30'
                },
                {
                    dir:['n','north'],
                    id:'9-31'
                }
            ],
        },
        {
            id:'9-29',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-28'
                },
                {
                    dir:['e','east'],
                    id:'8-29'
                },
                {
                    dir:['w','west'],
                    id:'10-29'
                },
                {
                    dir:['n','north'],
                    id:'9-30'
                }
            ],
        },

        {
            id:'9-28',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-27'
                },
                {
                    dir:['e','east'],
                    id:'8-28'
                },
                {
                    dir:['w','west'],
                    id:'10-28'
                },
                {
                    dir:['n','north'],
                    id:'9-29'
                }
            ],
        },
        {
            id:'9-26',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-25'
                },
                {
                    dir:['e','east'],
                    id:'8-26'
                },
                {
                    dir:['w','west'],
                    id:'10-26'
                },
                {
                    dir:['n','north'],
                    id:'27-26'//look at map to verify
                }
            ],
        },

        {
            id:'9-25',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-24'
                },
                {
                    dir:['e','east'],
                    id:'8-25'
                },
                {
                    dir:['w','west'],
                    id:'10-25'
                },
                {
                    dir:['n','north'],
                    id:'9-26'
                }
            ],
        },

        {
            id:'9-24',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-23'
                },
                {
                    dir:['e','east'],
                    id:'8-24'
                },
                {
                    dir:['w','west'],
                    id:'10-24'
                },
                {
                    dir:['n','north'],
                    id:'9-25'
                }
            ],
        },

        {
            id:'9-23',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-22'
                },
                {
                    dir:['e','east'],
                    id:'8-23'
                },
                {
                    dir:['w','west'],
                    id:'10-23'
                },
                {
                    dir:['n','north'],
                    id:'9-24'
                }
            ],
        },

        {
            id:'9-22',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-21'
                },
                {
                    dir:['e','east'],
                    id:'8-22'
                },
                {
                    dir:['w','west'],
                    id:'10-22'
                },
                {
                    dir:['n','north'],
                    id:'9-23'
                }
            ],
        },

        {
            id:'9-21',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-20'
                },
                {
                    dir:['e','east'],
                    id:'8-21'
                },
                {
                    dir:['w','west'],
                    id:'10-21'
                },
                {
                    dir:['n','north'],
                    id:'9-22'
                }
            ],
            
        },
        {
            id:'9-20',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-19'
                },
                {
                    dir:['e','east'],
                    id:'8-20'
                },
                {
                    dir:['w','west'],
                    id:'10-20'
                },
                {
                    dir:['n','north'],
                    id:'9-21'
                }
            ],
        },

        {
            id:'9-19',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-18'
                },
                {
                    dir:['e','east'],
                    id:'8-19'
                },
                {
                    dir:['w','west'],
                    id:'10-19'
                },
                {
                    dir:['n','north'],
                    id:'9-20'
                }
            ],
        },

        {
            id:'9-18',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-17'
                },
                {
                    dir:['e','east'],
                    id:'8-18'
                },
                {
                    dir:['w','west'],
                    id:'10-18'
                },
                {
                    dir:['n','north'],
                    id:'9-19'
                }
            ],
        },
        {
            id:'9-17',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-16'
                },
                {
                    dir:['e','east'],
                    id:'8-17'
                },
                {
                    dir:['w','west'],
                    id:'10-17'
                },
                {
                    dir:['n','north'],
                    id:'9-18'
                }
            ],
        },
        {
            id:'9-16',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-15'
                },
                {
                    dir:['e','east'],
                    id:'8-16'
                },
                {
                    dir:['w','west'],
                    id:'10-16'
                },
                {
                    dir:['n','north'],
                    id:'9-17'
                }
            ],
        },
        {
            id:'9-15',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '9-14'
                },
                {
                    dir:['e','east'],
                    id:'8-15'
                },
                {
                    dir:['w','west'],
                    id:'10-15'
                },
                {
                    dir:['n','north'],
                    id:'9-16'
                }
            ],
        },
        {
            id:'9-14',
            name: 'Chelsea',
            desc:``,
            exits:[
                //leaves nighborhood
                {
                    dir:['s','south'],
                    id: '9-13'
                },
                {
                    dir:['e','east'],
                    id:'8-14'
                },
                {
                    dir:['w','west'],
                    id:'10-14'
                },
                {
                    dir:['n','north'],
                    id:'9-15'
                }
            ],
        },
        //8th Ave
        {
            id:'8-34',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-33'
                },
                {
                    dir:['e','east'],
                    id:'7-34'
                },
                {
                    dir:['w','west'],
                    id:'9-34'
                },
                //exits neighborhood
                {
                    dir:['n','north'],
                    id:'8-'
                }
            ],
        },
        {
            id:'8-33',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-32'
                },
                {
                    dir:['e','east'],
                    id:'7-33'
                },
                {
                    dir:['w','west'],
                    id:'9-33'
                },
                {
                    dir:['n','north'],
                    id:'8-34'
                }
            ],
        },
        {
            id:'8-31',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-30'
                },
                {
                    dir:['e','east'],
                    id:'7-31'
                },
                {
                    dir:['w','west'],
                    id:'9-31'
                },
                {
                    dir:['n','north'],
                    id:'8-33'
                }
            ],
        },
        {
            id:'8-30',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-29'
                },
                {
                    dir:['e','east'],
                    id:'7-30'
                },
                {
                    dir:['w','west'],
                    id:'9-30'
                },
                {
                    dir:['n','north'],
                    id:'8-31'
                }
            ],
        },
        {
            id:'8-29',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-28'
                },
                {
                    dir:['e','east'],
                    id:'7-29'
                },
                {
                    dir:['w','west'],
                    id:'9-29'
                },
                {
                    dir:['n','north'],
                    id:'8-30'
                }
            ],
        },
        {
            id:'8-28',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-27'
                },
                {
                    dir:['e','east'],
                    id:'7-28'
                },
                {
                    dir:['w','west'],
                    id:'9-28'
                },
                {
                    dir:['n','north'],
                    id:'8-29'
                }
            ],
        },
        {
            id:'8-27',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-26'
                },
                {
                    dir:['e','east'],
                    id:'7-27'
                },
                {
                    dir:['w','west'],
                    id:'9-27'
                },
                {
                    dir:['n','north'],
                    id:'8-28'
                }
            ],
        },
        {
            id:'8-26',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-25'
                },
                {
                    dir:['e','east'],
                    id:'7-26'
                },
                {
                    dir:['w','west'],
                    id:'9-26'
                },
                {
                    dir:['n','north'],
                    id:'8-27'
                }
            ],
        },
        {
            id:'8-25',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-24'
                },
                {
                    dir:['e','east'],
                    id:'7-24'
                },
                {
                    dir:['w','west'],
                    id:'9-24'
                },
                {
                    dir:['n','north'],
                    id:'8-26'
                }
            ],
        },
        {
            id:'8-24',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-23'
                },
                {
                    dir:['e','east'],
                    id:'7-24'
                },
                {
                    dir:['w','west'],
                    id:'9-24'
                },
                {
                    dir:['n','north'],
                    id:'8-25'
                }
            ],
        },
        {
            id:'8-23',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-22'
                },
                {
                    dir:['e','east'],
                    id:'7-23'
                },
                {
                    dir:['w','west'],
                    id:'9-23'
                },
                {
                    dir:['n','north'],
                    id:'8-24'
                }
            ],
        },
        {
            id:'8-22',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-21'
                },
                {
                    dir:['e','east'],
                    id:'7-22'
                },
                {
                    dir:['w','west'],
                    id:'9-22'
                },
                {
                    dir:['n','north'],
                    id:'8-23'
                }
            ],
        },
        {
            id:'8-21',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-20'
                },
                {
                    dir:['e','east'],
                    id:'7-21'
                },
                {
                    dir:['w','west'],
                    id:'9-21'
                },
                {
                    dir:['n','north'],
                    id:'8-22'
                }
            ],
        },
        {
            id:'8-20',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-19'
                },
                {
                    dir:['e','east'],
                    id:'7-20'
                },
                {
                    dir:['w','west'],
                    id:'9-20'
                },
                {
                    dir:['n','north'],
                    id:'8-21'
                }
            ],
        },
        {
            id:'8-19',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-18'
                },
                {
                    dir:['e','east'],
                    id:'7-19'
                },
                {
                    dir:['w','west'],
                    id:'9-19'
                },
                {
                    dir:['n','north'],
                    id:'8-20'
                }
            ],
        },
        {
            id:'8-18',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-17'
                },
                {
                    dir:['e','east'],
                    id:'7-16'
                },
                {
                    dir:['w','west'],
                    id:'9-16'
                },
                {
                    dir:['n','north'],
                    id:'8-17'
                }
            ],
        },
        {
            id:'8-17',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-16'
                },
                {
                    dir:['e','east'],
                    id:'7-17'
                },
                {
                    dir:['w','west'],
                    id:'9-17'
                },
                {
                    dir:['n','north'],
                    id:'8-18'
                }
            ],
        },
        {
            id:'8-16',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-15'
                },
                {
                    dir:['e','east'],
                    id:'7-16'
                },
                {
                    dir:['w','west'],
                    id:'9-16'
                },
                {
                    dir:['n','north'],
                    id:'8-17'
                }
            ],
        },
        {
            id:'8-15',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '8-14'
                },
                {
                    dir:['e','east'],
                    id:'7-15'
                },
                {
                    dir:['w','west'],
                    id:'9-15'
                },
                {
                    dir:['n','north'],
                    id:'8-16'
                }
            ],
        },
        {
            id:'8-14',
            name: '',
            desc:`Chelsea`,
            exits:[
                //exits neighborhood
                {
                    dir:['s','south'],
                    id: '8-13'
                },
                {
                    dir:['e','east'],
                    id:'7-14'
                },
                {
                    dir:['w','west'],
                    id:'9-14'
                },
                {
                    dir:['n','north'],
                    id:'8-15'
                }
            ],
        },
        //7th Ave
        {
            id:'7-34',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-33'
                },
                {
                    dir:['e','east'],
                    id:'6-34'
                },
                {
                    dir:['w','west'],
                    id:'8-34'
                },
                //exits neighborhood
                {
                    dir:['n','north'],
                    id:'7-35'
                }
            ],
        },
        {
            id:'7-33',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-32'
                },
                {
                    dir:['e','east'],
                    id:'6-33'
                },
                {
                    dir:['w','west'],
                    id:'8-33'
                },
                {
                    dir:['n','north'],
                    id:'7-34'
                }
            ],
        },
        {
            id:'7-32',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-31'
                },
                {
                    dir:['e','east'],
                    id:'6-32'
                },
                {
                    dir:['w','west'],
                    id:'8-32'
                },
                {
                    dir:['n','north'],
                    id:'7-33'
                }
            ],
        },
        {
            id:'7-31',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-30'
                },
                {
                    dir:['e','east'],
                    id:'6-31'
                },
                {
                    dir:['w','west'],
                    id:'8-31'
                },
                {
                    dir:['n','north'],
                    id:'7-32'
                }
            ],
        },
        {
            id:'7-30',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-29'
                },
                {
                    dir:['e','east'],
                    id:'6-30'
                },
                {
                    dir:['w','west'],
                    id:'8-30'
                },
                {
                    dir:['n','north'],
                    id:'7-31'
                }
            ],
        },
        {
            id:'7-29',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-28'
                },
                {
                    dir:['e','east'],
                    id:'6-29'
                },
                {
                    dir:['w','west'],
                    id:'8-29'
                },
                {
                    dir:['n','north'],
                    id:'7-30'
                }
            ],
        },
        {
            id:'7-28',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-27'
                },
                {
                    dir:['e','east'],
                    id:'6-28'
                },
                {
                    dir:['w','west'],
                    id:'8-28'
                },
                {
                    dir:['n','north'],
                    id:'7-29'
                }
            ],
        },
        {
            id:'7-27',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-26'
                },
                {
                    dir:['e','east'],
                    id:'6-27'
                },
                {
                    dir:['w','west'],
                    id:'8-27'
                },
                {
                    dir:['n','north'],
                    id:'7-28'
                }
            ],
        },
        {
            id:'7-26',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-25'
                },
                {
                    dir:['e','east'],
                    id:'6-26'
                },
                {
                    dir:['w','west'],
                    id:'8-26'
                },
                {
                    dir:['n','north'],
                    id:'7-27'
                }
            ],
        },
        {
            id:'7-25',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-24'
                },
                {
                    dir:['e','east'],
                    id:'6-25'
                },
                {
                    dir:['w','west'],
                    id:'8-25'
                },
                {
                    dir:['n','north'],
                    id:'7-26'
                }
            ],
        },
        {
            id:'7-24',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-23'
                },
                {
                    dir:['e','east'],
                    id:'6-24'
                },
                {
                    dir:['w','west'],
                    id:'8-24'
                },
                {
                    dir:['n','north'],
                    id:'7-25'
                }
            ],
        },
        {
            id:'7-23',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-22'
                },
                {
                    dir:['e','east'],
                    id:'6-23'
                },
                {
                    dir:['w','west'],
                    id:'8-23'
                },
                {
                    dir:['n','north'],
                    id:'7-24'
                }
            ],
        },
        {
            id:'7-22',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-21'
                },
                {
                    dir:['e','east'],
                    id:'6-22'
                },
                {
                    dir:['w','west'],
                    id:'8-22'
                },
                {
                    dir:['n','north'],
                    id:'7-23'
                }
            ],
        },
        {
            id:'7-21',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-20'
                },
                {
                    dir:['e','east'],
                    id:'6-21'
                },
                {
                    dir:['w','west'],
                    id:'8-21'
                },
                {
                    dir:['n','north'],
                    id:'7-21'
                }
            ],
        },
        {
            id:'7-20',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-19'
                },
                {
                    dir:['e','east'],
                    id:'6-20'
                },
                {
                    dir:['w','west'],
                    id:'8-20'
                },
                {
                    dir:['n','north'],
                    id:'7-21'
                }
            ],
        },
        {
            id:'7-19',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-18'
                },
                {
                    dir:['e','east'],
                    id:'6-19'
                },
                {
                    dir:['w','west'],
                    id:'8-19'
                },
                {
                    dir:['n','north'],
                    id:'7-20'
                }
            ],
        },
        {
            id:'7-18',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-17'
                },
                {
                    dir:['e','east'],
                    id:'6-18'
                },
                {
                    dir:['w','west'],
                    id:'8-18'
                },
                {
                    dir:['n','north'],
                    id:'7-19'
                }
            ],
        },
        {
            id:'7-17',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-16'
                },
                {
                    dir:['e','east'],
                    id:'6-17'
                },
                {
                    dir:['w','west'],
                    id:'8-17'
                },
                {
                    dir:['n','north'],
                    id:'7-18'
                }
            ],
        },
        {
            id:'7-16',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-15'
                },
                {
                    dir:['e','east'],
                    id:'6-16'
                },
                {
                    dir:['w','west'],
                    id:'8-16'
                },
                {
                    dir:['n','north'],
                    id:'7-17'
                }
            ],
        },
        {
            id:'7-15',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-14'
                },
                {
                    dir:['e','east'],
                    id:'6-14'
                },
                {
                    dir:['w','west'],
                    id:'8-14'
                },
                {
                    dir:['n','north'],
                    id:'7-15'
                }
            ],
        },
        {
            id:'7-14',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '7-13'
                },
                {
                    dir:['e','east'],
                    id:'6-14'
                },
                {
                    dir:['w','west'],
                    id:'8-14'
                },
                {
                    dir:['n','north'],
                    id:'7-15'
                }
            ],
        },
        //6th Ave
        {
            id:'6-34',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-33'
                },
                {
                    dir:['e','east'],
                    id:'broad-34'
                },
                {
                    dir:['w','west'],
                    id:'7-33'
                },
                {
                    dir:['n','north'],
                    id:'6-35'
                }
            ],
        },
        {
            id:'6-33',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-32'
                },
                {
                    dir:['e','east'],
                    id:'broad-33'
                },
                {
                    dir:['w','west'],
                    id:'7-33'
                },
                {
                    dir:['n','north'],
                    id:'6-34'
                }
            ],
        },
        {
            id:'6-32',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-31'
                },
                {
                    dir:['e','east'],
                    id:'broad-32'
                },
                {
                    dir:['w','west'],
                    id:'7-32'
                },
                {
                    dir:['n','north'],
                    id:'6-33'
                }
            ],
        },
        {
            id:'6-31',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-30'
                },
                {
                    dir:['e','east'],
                    id:'broad-31'
                },
                {
                    dir:['w','west'],
                    id:'7-31'
                },
                {
                    dir:['n','north'],
                    id:'6-32'
                }
            ],
        },
        {
            id:'6-30',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-29'
                },
                {
                    dir:['e','east'],
                    id:'broad-30'
                },
                {
                    dir:['w','west'],
                    id:'7-30'
                },
                {
                    dir:['n','north'],
                    id:'6-31'
                }
            ],
        },
        {
            id:'6-29',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-28'
                },
                {
                    dir:['e','east'],
                    id:'broad-29'
                },
                {
                    dir:['w','west'],
                    id:'7-29'
                },
                {
                    dir:['n','north'],
                    id:'6-30'
                }
            ],
        },
        {
            id:'6-28',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-27'
                },
                {
                    dir:['e','east'],
                    id:'broad-28'
                },
                {
                    dir:['w','west'],
                    id:'7-28'
                },
                {
                    dir:['n','north'],
                    id:'6-29'
                }
            ],
        },
        {
            id:'6-27',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-26'
                },
                {
                    dir:['e','east'],
                    id:'broad-27'
                },
                {
                    dir:['w','west'],
                    id:'7-27'
                },
                {
                    dir:['n','north'],
                    id:'6-28'
                }
            ],
        },
        {
            id:'6-26',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-25'
                },
                {
                    dir:['e','east'],
                    id:'broad-26'
                },
                {
                    dir:['w','west'],
                    id:'7-26'
                },
                {
                    dir:['n','north'],
                    id:'6-27'
                }
            ],
        },
        {
            id:'6-25',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-24'
                },
                {
                    dir:['e','east'],
                    id:'broad-25'
                },
                {
                    dir:['w','west'],
                    id:'7-25'
                },
                {
                    dir:['n','north'],
                    id:'6-26'
                }
            ],
        },
        {
            id:'6-24',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-23'
                },
                {
                    dir:['e','east'],
                    id:'broad-24'
                },
                {
                    dir:['w','west'],
                    id:'7-24'
                },
                {
                    dir:['n','north'],
                    id:'6-25'
                }
            ],
        },
        {
            id:'6-23',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-22'
                },
                {
                    dir:['e','east'],
                    id:'5-23'
                },
                {
                    dir:['w','west'],
                    id:'7-23'
                },
                {
                    dir:['n','north'],
                    id:'6-24'
                }
            ],
        },
        {
            id:'6-22',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-21'
                },
                //need to check where this road connects.
                {
                    dir:['e','east'],
                    id:'5-22'
                },
                {
                    dir:['w','west'],
                    id:'7-22'
                },
                {
                    dir:['n','north'],
                    id:'6-23'
                }
            ],
        },
        {
            id:'6-21',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-20'
                },
                //need to check where this road connects.
                {
                    dir:['e','east'],
                    id:'5-21'
                },
                {
                    dir:['w','west'],
                    id:'7-21'
                },
                {
                    dir:['n','north'],
                    id:'6-22'
                }
            ],
            
        },
        {
            id:'6-20',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-19'
                },
                {
                    dir:['e','east'],
                    id:'5-20'
                },
                {
                    dir:['w','west'],
                    id:'7-20'
                },
                {
                    dir:['n','north'],
                    id:'6-21'
                }
            ],
        },
        {
            id:'6-19',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-18'
                },
                {
                    dir:['e','east'],
                    id:'5-18'
                },
                {
                    dir:['w','west'],
                    id:'7-18'
                },
                {
                    dir:['n','north'],
                    id:'6-20'
                }
            ],
        },
        {
            id:'6-18',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-17'
                },
                {
                    dir:['e','east'],
                    id:'5-18'
                },
                {
                    dir:['w','west'],
                    id:'7-18'
                },
                {
                    dir:['n','north'],
                    id:'6-19'
                }
            ],
        },
        {
            id:'6-17',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-16'
                },
                {
                    dir:['e','east'],
                    id:'5-17'
                },
                {
                    dir:['w','west'],
                    id:'7-17'
                },
                {
                    dir:['n','north'],
                    id:'6-18'
                }
            ],
        },
        {
            id:'6-16',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-15'
                },
                {
                    dir:['e','east'],
                    id:'5-16'
                },
                {
                    dir:['w','west'],
                    id:'7-16'
                },
                {
                    dir:['n','north'],
                    id:'6-17'
                }
            ],
        },
        {
            id:'6-15',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '6-14'
                },
                {
                    dir:['e','east'],
                    id:'5-15'
                },
                {
                    dir:['w','west'],
                    id:'7-15'
                },
                {
                    dir:['n','north'],
                    id:'6-16'
                }
            ],
        },
        {
            id:'6-14',
            name: 'Chelsea',
            desc:``,
            exits:[
                //exits neighborhood
                {
                    dir:['s','south'],
                    id: '6-13'
                },
                {
                    dir:['e','east'],
                    id:'5-14'
                },
                {
                    dir:['w','west'],
                    id:'7-14'
                },
                {
                    dir:['n','north'],
                    id:'6-15'
                }
            ],
        },
        //Broadway
        {
            id:'broa-6',
            name: 'Chelsea',
            desc:``,
        },
        {
            id:'broa-33',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-32'
                },
                {
                    dir:['e','east'],
                    id:'5-33'
                },
                {
                    dir:['w','west'],
                    id:'6-33'
                },
                {
                    dir:['n','north'],
                    id:'broa-6'
                }
            ],
        },
        {
            id:'broa-32',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-31'
                },
                {
                    dir:['e','east'],
                    id:'5-32'
                },
                {
                    dir:['w','west'],
                    id:'6-32'
                },
                {
                    dir:['n','north'],
                    id:'broa-33'
                }
            ],
        },
        {
            id:'broa-31',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-30'
                },
                {
                    dir:['e','east'],
                    id:'5-31'
                },
                {
                    dir:['w','west'],
                    id:'6-31'
                },
                {
                    dir:['n','north'],
                    id:'broa-32'
                }
            ],
        },
        {
            id:'broa-30',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-29'
                },
                {
                    dir:['e','east'],
                    id:'5-30'
                },
                {
                    dir:['w','west'],
                    id:'6-30'
                },
                {
                    dir:['n','north'],
                    id:'broa-31'
                }
            ],
        },
        {
            id:'broa-29',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-28'
                },
                {
                    dir:['e','east'],
                    id:'5-29'
                },
                {
                    dir:['w','west'],
                    id:'6-29'
                },
                {
                    dir:['n','north'],
                    id:'broa-30'
                }
            ],
        },
        {
            id:'broa-28',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-27'
                },
                {
                    dir:['e','east'],
                    id:'5-27'
                },
                {
                    dir:['w','west'],
                    id:'6-27'
                },
                {
                    dir:['n','north'],
                    id:'broa-29'
                }
            ],
        },
        {
            id:'broa-27',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-26'
                },
                {
                    dir:['e','east'],
                    id:'5-27'
                },
                {
                    dir:['w','west'],
                    id:'6-27'
                },
                {
                    dir:['n','north'],
                    id:'broa-28'
                }
            ],
        },
        {
            id:'broa-26',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-25'
                },
                {
                    dir:['e','east'],
                    id:'5-26'
                },
                {
                    dir:['w','west'],
                    id:'6-26'
                },
                {
                    dir:['n','north'],
                    id:'broa-27'
                }
            ],
        },
        {
            id:'broa-25',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-24'
                },
                {
                    dir:['e','east'],
                    id:'5-25'
                },
                {
                    dir:['w','west'],
                    id:'6-25'
                },
                {
                    dir:['n','north'],
                    id:'broa-26'
                }
            ],
        },
        {
            id:'broa-5',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '5-24'
                },
                {
                    dir:['e','east'],
                    id:'broa-23'
                },
                {
                    dir:['w','west'],
                    id:'broa-25'
                },
                {
                    dir:['n','north'],
                    id:'5-25'
                }
            ],
        },
        {
            id:'broa-23',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-22'
                },
                {
                    dir:['e','east'],
                    id:'madi-23'
                },
                {
                    dir:['w','west'],
                    id:'5-23'
                },
                {
                    dir:['n','north'],
                    id:'5-24'
                }
            ],
        },
        {
            id:'broa-22',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-21'
                },
                {
                    dir:['e','east'],
                    id:'park-22'
                },
                {
                    dir:['w','west'],
                    id:'5-22'
                },
                {
                    dir:['n','north'],
                    id:'broa-23'
                }
            ],
        },
        {
            id:'broa-21',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-20'
                },
                {
                    dir:['e','east'],
                    id:'park-21'
                },
                {
                    dir:['w','west'],
                    id:'5-21'
                },
                {
                    dir:['n','north'],
                    id:'broa-22'
                }
            ],
        },
        {
            id:'broa-20',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-19'
                },
                {
                    dir:['e','east'],
                    id:'park-20'
                },
                {
                    dir:['w','west'],
                    id:'5-20'
                },
                {
                    dir:['n','north'],
                    id:'broa-21'
                }
            ],
        },
        {
            id:'broa-19',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'broa-18'
                },
                {
                    dir:['e','east'],
                    id:'park-19'
                },
                {
                    dir:['w','west'],
                    id:'5-19'
                },
                {
                    dir:['n','north'],
                    id:'broa-20'
                }
            ],
        },
        {
            id:'broa-18',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: 'unio-squa-w17'
                },
                {
                    dir:['e','east'],
                    id:'park-18'
                },
                {
                    dir:['w','west'],
                    id:'5-18'
                },
                {
                    dir:['n','north'],
                    id:'broa-19'
                }
            ],
        },
        //5th Ave
        {
            id:'5-34',
            name: 'Chelsea',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '5-33'
                },
                {
                    dir:['e','east'],
                    id:'park-34'
                },
                {
                    dir:['w','west'],
                    id:'broa-6'
                },
                {
                    dir:['n','north'],
                    id:'5-35'
                }
            ],
        },
        {
            id:'5-33',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '5-32'
                },
                {
                    dir:['e','east'],
                    id:'park-33'
                },
                {
                    dir:['w','west'],
                    id:'broa-33'
                },
                {
                    dir:['n','north'],
                    id:'5-34'
                }
            ],
        },
        {
            id:'5-32',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '5-31'
                },
                {
                    dir:['e','east'],
                    id:'park-32'
                },
                {
                    dir:['w','west'],
                    id:'broa-32'
                },
                {
                    dir:['n','north'],
                    id:'5-33'
                }
            ],
        },
        {
            id:'5-31',
            name: '',
            desc:``,
            exits:[
                {
                    dir:['s','south'],
                    id: '5-30'
                },
                {
                    dir:['e','east'],
                    id:'park-31'
                },
                {
                    dir:['w','west'],
                    id:'broa-31'
                },
                {
                    dir:['n','north'],
                    id:'5-32'
                }
            ],
        },
        {
            id:'5-30',
            name: '',
            desc:``,
        },
        {
            id:'5-29',
            name: '',
            desc:``,
        },
        {
            id:'5-28',
            name: '',
            desc:``,
        },
        {
            id:'5-27',
            name: '',
            desc:``,
        },
        {
            id:'5-26',
            name: '',
            desc:``,
        },
        {
            id:'5-25',
            name: '',
            desc:``,
        },
        {
            id:'5-24',
            name: '',
            desc:``,
        },
        {
            id:'5-23',
            name: '',
            desc:``,
        },
        {
            id:'5-22',
            name: '',
            desc:``,
        },
        {
            id:'5-21',
            name: '',
            desc:``,
        },
        {
            id:'5-20',
            name: '',
            desc:``,
        },
        {
            id:'5-19',
            name: '',
            desc:``,
        },
        {
            id:'5-18',
            name: '',
            desc:``,
        },
        {
            id:'5-16',
            name: '',
            desc:``,
        },
        {
            id:'5-15',
            name: '',
            desc:``,
        },
        {
            id:'5-14',
            name: '',
            desc:``,
        },
        //Madison Ave
        {
            id:'madi-34',
            name: 'Chelsea',
            desc:``,
        },
        {
            id:'madi-33',
            name: '',
            desc:``,
        },
        {
            id:'madi-32',
            name: '',
            desc:``,
        },
        {
            id:'madi-31',
            name: '',
            desc:``,
        },
        {
            id:'madi-30',
            name: '',
            desc:``,
        },
        {
            id:'madi-29',
            name: '',
            desc:``,
        },
        {
            id:'madi-28',
            name: '',
            desc:``,
        },
        {
            id:'madi-27',
            name: '',
            desc:``,
        },
        {
            id:'madi-26',
            name: '',
            desc:``,
        },
        {
            id:'madi-25',
            name: '',
            desc:``,
        },
        {
            id:'madi-24',
            name: '',
            desc:``,
        },
        {
            id:'madi-23',
            name: '',
            desc:``,
        },
        //Union Square West and East
        {
            id:'unio-w-17',
            name: '',
            desc:``,
        },
        {
            id:'unio-w-16',
            name: '',
            desc:``,
        },
        {
            id:'unio-w-15',
            name: '',
            desc:``,
        },
        {
            id:'unio-w-14',
            name: '',
            desc:``,
        },
        {
            id:'unio-e-17',
            name: '',
            desc:``,
        },
        {
            id:'unio-e-16',
            name: '',
            desc:``,
        },
        {
            id:'unio-e-15',
            name: '',
            desc:``,
        },
        {
            id:'unio-e-14',
            name: '',
            desc:``,
        },
        //Park Ave
        {
            id:'park-34',
            name: '',
            desc:``,
        },
        {
            id:'park-33',
            name: '',
            desc:``,
        },
        {
            id:'park-32',
            name: '',
            desc:``,
        },
        {
            id:'park-31',
            name: '',
            desc:``,
        },
        {
            id:'park-30',
            name: '',
            desc:``,
        },
        {
            id:'park-29',
            name: '',
            desc:``,
        },
        {
            id:'park-28',
            name: '',
            desc:``,
        },
        {
            id:'park-27',
            name: '',
            desc:``,
        },
        {
            id:'park-26',
            name: '',
            desc:``,
        },
        {
            id:'park-25',
            name: '',
            desc:``,
        },
        {
            id:'park-24',
            name: '',
            desc:``,
        },
        {
            id:'park-23',
            name: '',
            desc:``,
        },
        {
            id:'park-22',
            name: '',
            desc:``,
        },
        {
            id:'park-21',
            name: '',
            desc:``,
        },
        {
            id:'park-20',
            name: '',
            desc:``,
        },
        {
            id:'park-19',
            name: '',
            desc:``,
        },
        {
            id:'park-18',
            name: '',
            desc:``,
        },
        //Lexington Ave
        {
            id:'lexi-34',
            name: '',
            desc:``,
        },
        {
            id:'lexi-33',
            name: '',
            desc:``,
        },
        {
            id:'lexi-32',
            name: '',
            desc:``,
        },
        {
            id:'lexi-31',
            name: '',
            desc:``,
        },
        {
            id:'lexi-30',
            name: '',
            desc:``,
        },
        {
            id:'lexi-29',
            name: '',
            desc:``,
        },
        {
            id:'lexi-28',
            name: '',
            desc:``,
        },
        {
            id:'lexi-27',
            name: '',
            desc:``,
        },
        {
            id:'lexi-26',
            name: '',
            desc:``,
        },
        {
            id:'lexi-25',
            name: '',
            desc:``,
        },
        {
            id:'lexi-24',
            name: '',
            desc:``,
        },
        {
            id:'lexi-23',
            name: '',
            desc:``,
        },
        {
            id:'lexi-22',
            name: '',
            desc:``,
        },
        {
            id:'lexi-21',
            name: '',
            desc:``,
        },
        //Gramercy Park East and West
        {
            id:'gram-w-21',
            name: '',
            desc:``,
        },
        {
            id:'gram-w-20',
            name: '',
            desc:``,
        },
        {
            id:'gram-e-21',
            name: '',
            desc:``,
        },
        {
            id:'gram-e-20',
            name: '',
            desc:``,
        },
        //Irving Plaza
        {
            id:'irvi-19',
            name: '',
            desc:``,
        },
        {
            id:'irvi-18',
            name: '',
            desc:``,
        },
        {
            id:'irvi-17',
            name: '',
            desc:``,
        },
        {
            id:'irvi-16',
            name: '',
            desc:``,
        },
        {
            id:'irvi-15',
            name: '',
            desc:``,
        },
        {
            id:'irvi-14',
            name: '',
            desc:``,
        },
        //3rd Ave
        {
            id:'3-34',
            name: '',
            desc:``,
        },
        {
            id:'3-33',
            name: '',
            desc:``,
        },
        {
            id:'3-32',
            name: '',
            desc:``,
        },
        {
            id:'3-31',
            name: '',
            desc:``,
        },
        {
            id:'3-30',
            name: '',
            desc:``,
        },
        {
            id:'3-29',
            name: '',
            desc:``,
        },
        {
            id:'3-28',
            name: '',
            desc:``,
        },
        {
            id:'3-27',
            name: '',
            desc:``,
        },
        {
            id:'3-26',
            name: '',
            desc:``,
        },
        {
            id:'3-25',
            name: '',
            desc:``,
        },
        {
            id:'3-24',
            name: '',
            desc:``,
        },
        {
            id:'3-23',
            name: '',
            desc:``,
        },
        {
            id:'3-22',
            name: '',
            desc:``,
        },
        {
            id:'3-21',
            name: '',
            desc:``,
        },
        {
            id:'3-20',
            name: '',
            desc:``,
        },
        {
            id:'3-19',
            name: '',
            desc:``,
        },
        {
            id:'3-18',
            name: '',
            desc:``,
        },
        {
            id:'3-17',
            name: '',
            desc:``,
        },
        {
            id:'3-16',
            name: '',
            desc:``,
        },
        {
            id:'3-15',
            name: '',
            desc:``,
        },
        {
            id:'3-14',
            name: '',
            desc:``,
        },
        //2nd Ave
        {
            id:'2-34',
            name: '',
            desc:``,
        },
        {
            id:'2-33',
            name: '',
            desc:``,
        },
        {
            id:'2-32',
            name: '',
            desc:``,
        },
        {
            id:'2-31',
            name: '',
            desc:``,
        },
        {
            id:'2-30',
            name: '',
            desc:``,
        },
        {
            id:'2-29',
            name: '',
            desc:``,
        },
        {
            id:'2-28',
            name: '',
            desc:``,
        },
        {
            id:'2-27',
            name: '',
            desc:``,
        },
        {
            id:'2-26',
            name: '',
            desc:``,
        },
        {
            id:'2-25',
            name: '',
            desc:``,
        },
        {
            id:'2-24',
            name: '',
            desc:``,
        },
        {
            id:'2-23',
            name: '',
            desc:``,
        },
        {
            id:'2-22',
            name: '',
            desc:``,
        },
        {
            id:'2-21',
            name: '',
            desc:``,
        },
        {
            id:'2-20',
            name: '',
            desc:``,
        },
        {
            id:'2-19',
            name: '',
            desc:``,
        },
        {
            id:'2-18',
            name: '',
            desc:``,
        },
        {
            id:'2-17',
            name: '',
            desc:``,
        },
        {
            id:'2-15',
            name: '',
            desc:``,
        },        
        {
            id:'2-14',
            name: '',
            desc:``,
        },
        //Rutherford Plaza
        {
            id:'ruth-17',
            name: '',
            desc:``,
        },
        {
            id:'ruth-16',
            name: '',
            desc:``,
        },
        {
            id:'ruth-15',
            name: '',
            desc:``,
        },
        //nathan d perlman Plaza
        {
            id:'nath-17',
            name: '',
            desc:``,
        },
        {
            id:'nath-16',
            name: '',
            desc:``,
        },
        {
            id:'nath-15',
            name: '',
            desc:``,
        },
        //Mt. Carmel Plaza
        {
            id:'car-28',
            name: '',
            desc:``,
        },
        {
            id:'car-26',
            name: '',
            desc:``,
        },
        //1st Ave
        {
            id:'1-34',
            name: '',
            desc:``,
        },
        {
            id:'1-33',
            name: '',
            desc:``,
        },
        {
            id:'1-30',
            name: '',
            desc:``,
        },
        {
            id:'1-29',
            name: '',
            desc:``,
        },
        {
            id:'1-28',
            name: '',
            desc:``,
        },
        {
            id:'1-27',
            name: '',
            desc:``,
        },
        {
            id:'1-26',
            name: '',
            desc:``,
        },
        {
            id:'1-25',
            name: '',
            desc:``,
        },
        {
            id:'1-24',
            name: '',
            desc:``,
        },
        {
            id:'1-23',
            name: '',
            desc:``,
        },
        {
            id:'1-22',
            name: '',
            desc:``,
        },
        {
            id:'1-21',
            name: '',
            desc:``,
        },
        {
            id:'1-20',
            name: '',
            desc:``,
        },
        {
            id:'1-19',
            name: '',
            desc:``,
        },
        {
            id:'1-18',
            name: '',
            desc:``,
        },
        {
            id:'1-17',
            name: '',
            desc:``,
        },
        {
            id:'1-16',
            name: '',
            desc:``,
        },
        {
            id:'1-15',
            name: '',
            desc:``,
        },
        {
            id:'1-14',
            name: '',
            desc:``,
        },
        //Misc streets East side of map
        {
            id:'fdr-34',
            name: '',
            desc:``,
        },
        {
            id:'fdr-23',
            name: '',
            desc:``,
        },
        {
            id:'fdr-pete',
            name: '',
            desc:``,
        },
        {
            id:'pete-22',
            name: '',
            desc:``,
        },
        {
            id:'pete-asse',
            name: '',
            desc:``,
        },
        {
            id:'asse-23',
            name: '',
            desc:``,
        },
    ],

},