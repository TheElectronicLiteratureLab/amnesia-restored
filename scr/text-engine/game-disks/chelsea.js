const chelsea = {

    roomId: '12-34',//unique room identifier
    rooms: [
            
        //12th Ave
        {
            id:'12-34',
            name: '12th Avenue and 34th Street',
            desc:``,
            
            exits:[
                {dir:['s','south'],id: '12-33'},
                {dir:['e','east'],id:'11-34'},
                //leaves neighborhood
                {dir:['n','north'],id:'12-35'}
            ],
        },
        {
            id:'12-33',
            name: '12th Avenue and 33rd Street',
            desc:``,

            exits:[
                {dir:['s','south'], id: '12-30'},
                {dir:['e','east'],id:'11-33'}
            ],
        },
        {
            id:'12-30',
            name: '12th Avenue and 32nd Street',
            desc:``,

            exits:[
                {dir:['s','south'],id: '12-29'},
                {dir:['e','east'], id:'11-30'}
            ],
        },
        {
            id:'12-29',
            name: '12th Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '12-28'},
                {dir:['e','east'], id:'11-29' }
            ],
        },
        {
            id:'12-28',
            name: '12th Avenue and 30th Street',
            desc:``,

            exits:[
                {dir:['s','south'],id: '12-27'},
                {dir:['e','east'],id:'11-28'}
            ],
        },            
        {
            id:'12-27',
            name: '12th Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '12-26'},
                {dir:['e','east'],id:'11-27'}
            ],
        },
        {
            id:'12-26',
            name: '12th Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '12-25'},
                {dir:['e','east'],id:'11-26'}
            ],
        },
        {
            id:'12-25',
            name: '12th Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '12-24'},
                {dir:['e','east'],id:'11-25'}
            ],
        },
        {
            id:'12-24',
            name: '12th Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-23'},
                {dir:['e','east'],id:'11-24'}
            ],
        },
        //11th Ave.
        {
            id:'11-34',
            name: '11th Aveneue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-33'},
                {dir:['e','east'],id:'10-34'},
                {dir:['w','west'],id:'12-34'},
                //leaves neighborhood.
                {dir:['n','north'],id:'11-35'}
            ],
        },
        {
            id:'11-33',
            name: '11th Aveneue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-33'},
                {dir:['e','east'],id:'10-33'},
                {dir:['w','west'],id:'12-33'},
                {dir:['n','north'],id:'11-34'
                }
            ],
        },
        {
            id:'11-30',
            name: '11th Aveneue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-29'},
                {dir:['e','east'],id:'10-30'},
                {dir:['w','west'],id:'12-30'},
                {dir:['n','north'],id:'11-33'}
            ],
        },
        {
            id:'11-29',
            name: '11th Aveneue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-28'},
                {dir:['e','east'],id:'10-29'},
                {dir:['w','west'],id:'12-29'},
                {dir:['n','north'],id:'11-30'}
            ],
        },
        {
            id:'11-28',
            name: '11th Aveneue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-27'},
                {dir:['e','east'],id:'10-28'},
                {dir:['w','west'],id:'12-28'},
                {dir:['n','north'],id:'11-29'}
            ],
        },
        {
            id:'11-27',
            name: '11th Aveneue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-26'},
                {dir:['e','east'],id:'10-27'},
                {dir:['w','west'],id:'12-27'},
                {dir:['n','north'],id:'11-28'}
            ],
        },
        {
            id:'11-26',
            name: '11th Aveneue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-25'},
                {dir:['e','east'],id:'10-26'},
                {dir:['w','west'],id:'12-26'},
                {dir:['n','north'],id:'11-27'}
            ],
        },
        {
            id:'11-25',
            name: '11th Aveneue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-24'},
                {dir:['e','east'],id:'10-25'},
                {dir:['w','west'],id:'12-25'},
                {dir:['n','north'],id:'11-26'}
            ],
        },
        {
            id:'11-24',
            name: '11th Aveneue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-23'},
                {dir:['e','east'],id:'10-24'},
                {dir:['w','west'],id:'12-24'},
                {dir:['n','north'],id:'11-25'}
            ],
        },        
        {
            id:'11-23',
            name: '11th Aveneue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-22'
},
                {dir:['e','east'],id:'10-23'},
                {dir:['n','north'],id:'11-24'}
            ],
        },        
        {
            id:'11-22',
            name: '11th Aveneue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-21'},
                {dir:['e','east'],id:'10-22'},
                {dir:['n','north'],id:'11-23'}
            ],
        },        
        {
            id:'11-21',
            name: '11th Aveneue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-20'},
                {dir:['e','east'],id:'10-21'},
                {dir:['n','north'],id:'11-22'}
            ],
        },        
        {
            id:'11-20',
            name: '11th Aveneue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-19'},
                {dir:['e','east'],id:'10-20'},
                {dir:['n','north'],id:'11-21'}
            ],
        },        
        {
            id:'11-19',
            name: '11th Aveneue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-18'},
                {dir:['e','east'],id:'10-19'},
                {dir:['n','north'],id:'11-20'}
            ],
        },        
        {
            id:'11-18',
            name: '11th Aveneue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-17'},
                {dir:['e','east'],id:'10-18'},
                {dir:['n','north'],id:'11-19'}
            ],
        },        
        {
            id:'11-17',
            name: '11th Aveneue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-16' },
                {dir:['e','east'],id:'10-17'
                },
                { dir:['n','north'],id:'11-18'}
            ],
        },        
        {
            id:'11-16',
            name: '11th Aveneue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-15'},
                { dir:['e','east'],id:'10-16'},
                {dir:['n','north'],id:'11-17'}
            ],
        },        
        {
            id:'11-15',
            name: '11th Aveneue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '11-14'},
                {dir:['e','east'],id:'10-15'},
                {dir:['n','north'],id:'11-16'}
            ],
        },        
        {
            id:'11-14',
            name: '11th Aveneue and 14th Street',
            desc:``,         
            exits:[
                {dir:['s','south'],id: '11-13'},
                {dir:['e','east'],id:'10-14'},
                {dir:['n','north'],id:'11-15'}
            ],
        },
        //10th Ave
        {
            id:'10-34',
            name: '10th Aveneue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-33'},
                {dir:['e','east'],id:'9-34'},
                {dir:['w','west'],id:'11-34'},
                {dir:['n','north'],id:'10-35'}
            ],
        },
        {
            id:'10-33',
            name: '10th Aveneue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-31'},
                {dir:['e','east'],id:'9-33'},
                {dir:['w','west'],id:'11-33'},
                {dir:['n','north'],id:'10-34'}
            ],
        },
        {
            id:'10-31',
            name: '10th Aveneue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-30'},
                {dir:['e','east'],id:'9-31'},
                {dir:['w','west'],id:'11-31'},
                {dir:['n','north'],id:'10-33'}
            ],
        },
        {
            id:'10-30',
            name: '10th Aveneue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-29'},
                {dir:['e','east'],id:'9-30'},
                {dir:['w','west'],id:'11-30'},
                {dir:['n','north'],id:'10-31'}
            ],
        },
        {
            id:'10-29',
            name: '10th Aveneue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-28'},
                {dir:['e','east'],id:'9-29'},
                {dir:['w','west'],id:'11-29'},
                {dir:['n','north'],id:'10-30'}
            ],
        },
        {
            id:'10-28',
            name: '10th Aveneue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-27'},
                {dir:['e','east'],id:'9-28'},
                {dir:['w','west'],id:'11-28'},
                {dir:['n','north'],id:'10-29'}
            ],
        },
        {
            id:'10-27',
            name: '10th Aveneue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-26'},
                {dir:['e','east'],id:'9-27'},
                {dir:['w','west'],id:'11-27'},
                {dir:['n','north'],id:'10-28'}
            ],
        },
        {
            id:'10-26',
            name: '10th Aveneue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-25'},
                {dir:['e','east'],id:'9-26'},
                {dir:['w','west'],id:'11-26'},
                {dir:['n','north'],id:'10-27'}
            ],
        },
        {
            id:'10-25',
            name: '10th Aveneue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-24'},
                {dir:['e','east'],id:'9-25'},
                {dir:['w','west'],id:'11-25'},
                {dir:['n','north'],id:'10-26'}
            ],
        },
        {
            id:'10-24',
            name: '10th Aveneue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-23'},
                {dir:['e','east'],id:'9-24'},
                {dir:['w','west'],id:'11-24'},
                {dir:['n','north'],id:'10-25'}
            ],
        },
        {
            id:'10-23',
            name: '10th Aveneue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-22'},
                {dir:['e','east'],id:'9-23'},
                {dir:['w','west'],id:'11-23'},
                {dir:['n','north'],id:'10-24'}
            ],
        },
        {
            id:'10-22',
            name: '10th Aveneue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-21'},
                {dir:['e','east'],id:'9-22'},
                {dir:['w','west'],id:'11-22'},
                {dir:['n','north'],id:'10-23'}
            ],
        },
        {
            id:'10-21',
            name: '10th Aveneue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-20'},
                {dir:['e','east'],id:'9-21'},
                {dir:['w','west'],id:'11-21'},
                {dir:['n','north'],id:'10-22'
                }
            ],
        },
        {
            id:'10-20',
            name: '10th Aveneue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-19'},
                {dir:['e','east'],id:'9-20'},
                {dir:['w','west'],id:'11-20'},
                {dir:['n','north'],id:'10-21'}
            ],
        },
        {
            id:'10-19',
            name: '10th Aveneue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-18'},
                {dir:['e','east'],id:'9-19'},
                {dir:['w','west'],id:'11-19'},
                {dir:['n','north'],id:'10-20'}
            ],
        },
        {
            id:'10-18',
            name: '10th Aveneue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-17'},
                {dir:['e','east'],id:'9-18'},
                {dir:['w','west'],id:'11-18'},
                {dir:['n','north'],id:'10-19'}
            ],
        },
        {
            id:'10-17',
            name: '10th Aveneue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-16'},
                {dir:['e','east'],id:'9-17'},
                {dir:['w','west'],id:'11-17'},
                {dir:['n','north'],id:'10-18'}
            ],
        },
        {
            id:'10-16',
            name: '10th Aveneue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-15'},
                {dir:['e','east'],id:'9-16'},
                {dir:['w','west'],id:'11-16'},
                {dir:['n','north'],id:'10-17'}
            ],
        },
        {
            id:'10-15',
            name: '10th Aveneue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '10-14'},
                {dir:['e','east'],id:'9-15'},
                {dir:['w','west'],id:'11-15'},
                {dir:['n','north'],id:'10-16'}
            ],
        },
        {
            id:'10-14',
            name: '10th Aveneue and 14th Street',
            desc:``,
            exits:[
                //leaves neighborhood
                {dir:['s','south'],id: '10-13'},
                {dir:['e','east'],id:'9-14'},
                {dir:['w','west'],id:'11-14'},
                {dir:['n','north'],id:'10-15'}
            ],
        },
        //9th Ave
        {
            id:'27-26',
            name: '27th Street and 26th Street',
            desc:``,
        },
        {
            id:'9-34',
            name: '9th Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-33'},
                {dir:['e','east'],id:'8-34'},
                {dir:['w','west'],id:'10-34'},
                //leaves neighborhood
                {dir:['n','north'],id:'9-35'}
            ],
        },
        {
            id:'9-33',
            name: '9th Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-31'},
                {dir:['e','east'],id:'8-33'},
                {dir:['w','west'],id:'10-33'},
                {dir:['n','north'],id:'9-34'}
            ],
        },

        {
            id:'9-31',
            name: '9th Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-30'},
                {dir:['e','east'],id:'8-31'},
                {dir:['w','west'],id:'10-31'},
                {dir:['n','north'],id:'9-33'}
            ],
        },

        {
            id:'9-30',
            name: '9th Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-29'},
                {dir:['e','east'],id:'8-30'},
                {dir:['w','west'],id:'10-30'},
                {dir:['n','north'],id:'9-31'}
            ],
        },
        {
            id:'9-29',
            name: '9th Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-28'},
                {dir:['e','east'],id:'8-29'},
                {dir:['w','west'],id:'10-29'},
                {dir:['n','north'],id:'9-30'}
            ],
        },

        {
            id:'9-28',
            name: '9th Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-27'},
                {dir:['e','east'],id:'8-28'},
                {dir:['w','west'],id:'10-28'},
                {dir:['n','north'],id:'9-29'}
            ],
        },
        {
            id:'9-26',
            name: '9th Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-25'},
                {dir:['e','east'],id:'8-26'},
                {dir:['w','west'],id:'10-26'},
                {dir:['n','north'],id:'27-26'}
            ],
        },

        {
            id:'9-25',
            name: '9th Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-24'},
                {dir:['e','east'],id:'8-25'},
                {dir:['w','west'],id:'10-25'},
                {dir:['n','north'],id:'9-26'}
            ],
        },

        {
            id:'9-24',
            name: '9th Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-23'},
                {dir:['e','east'],id:'8-24'},
                {dir:['w','west'],id:'10-24'},
                {dir:['n','north'],id:'9-25'}
            ],
        },

        {
            id:'9-23',
            name: '9th Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-22'},
                {dir:['e','east'],id:'8-23'},
                {dir:['w','west'],id:'10-23'},
                {dir:['n','north'],id:'9-24'}
            ],
        },

        {
            id:'9-22',
            name: '9th Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-21'},
                {dir:['e','east'],id:'8-22'},
                {dir:['w','west'],id:'10-22'},
                {dir:['n','north'],id:'9-23'}
            ],
        },

        {
            id:'9-21',
            name: '9th Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-20'},
                {dir:['e','east'],id:'8-21'},
                {dir:['w','west'],id:'10-21'},
                {dir:['n','north'],id:'9-22'}
            ],
            
        },
        {
            id:'9-20',
            name: '9th Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-19'},
                {dir:['e','east'],id:'8-20'},
                {dir:['w','west'],id:'10-20'},
                {dir:['n','north'],id:'9-21'}
            ],
        },

        {
            id:'9-19',
            name: '9th Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-18'},
                {dir:['e','east'],id:'8-19'},
                {dir:['w','west'],id:'10-19'},
                {dir:['n','north'],id:'9-20'}
            ],
        },

        {
            id:'9-18',
            name: '9th Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-17'},
                {dir:['e','east'],id:'8-18'},
                {dir:['w','west'],id:'10-18'},
                {dir:['n','north'],id:'9-19'}
            ],
        },
        {
            id:'9-17',
            name: '9th Avenue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-16'},
                {dir:['e','east'],id:'8-17'},
                {dir:['w','west'],id:'10-17'},
                {dir:['n','north'],id:'9-18'}
            ],
        },
        {
            id:'9-16',
            name: '9th Avenue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-15'},
                {dir:['e','east'],id:'8-16'
                },
                {dir:['w','west'],id:'10-16'},
                {dir:['n','north'],id:'9-17'}
            ],
        },
        {
            id:'9-15',
            name: '9th Avenue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '9-14'},
                {dir:['e','east'],id:'8-15'},
                {dir:['w','west'],id:'10-15'},
                {dir:['n','north'],id:'9-16'}
            ],
        },
        {
            id:'9-14',
            name: '9th Avenue and 14th Street',
            desc:``,
            exits:[
                //leaves nighborhood
                {dir:['s','south'],id: '9-13'},
                {dir:['e','east'],id:'8-14'},
                {dir:['w','west'],id:'10-14'},
                {dir:['n','north'],id:'9-15'}
            ],
        },
        //8th Ave
        {
            id:'8-34',
            name: '8th Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-33'},
                {dir:['e','east'],id:'7-34'},
                {dir:['w','west'],id:'9-34'},
                //exits neighborhood
                {dir:['n','north'],id:'8-'}
            ],
        },
        {
            id:'8-33',
            name: '8th Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-32'},
                {dir:['e','east'],id:'7-33'},
                {dir:['w','west'],id:'9-33'},
                {dir:['n','north'],id:'8-34'}
            ],
        },
        {
            id:'8-31',
            name: '8th Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-30'},
                {dir:['e','east'],id:'7-31'},
                {dir:['w','west'],id:'9-31'},
                {dir:['n','north'],id:'8-33'}
            ],
        },
        {
            id:'8-30',
            name: '8th Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-29'},
                {dir:['e','east'],id:'7-30'},
                {dir:['w','west'],id:'9-30'},
                {dir:['n','north'],id:'8-31'}
            ],
        },
        {
            id:'8-29',
            name: '8th Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-28'},
                {dir:['e','east'],id:'7-29'},
                {dir:['w','west'],id:'9-29'},
                {dir:['n','north'],id:'8-30'}
            ],
        },
        {
            id:'8-28',
            name: '8th Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-27'},
                {dir:['e','east'],id:'7-28'},
                {dir:['w','west'],id:'9-28'},
                {dir:['n','north'],id:'8-29'}
            ],
        },
        {
            id:'8-27',
            name: '8th Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-26'},
                {dir:['e','east'],id:'7-27'},
                {dir:['w','west'],id:'9-27'},
                {dir:['n','north'],id:'8-28'}
            ],
        },
        {
            id:'8-26',
            name: '8th Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-25'},
                {dir:['e','east'],id:'7-26'},
                {dir:['w','west'],id:'9-26'},
                {dir:['n','north'],id:'8-27'}
            ],
        },
        {
            id:'8-25',
            name: '8th Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-24'},
                {dir:['e','east'],id:'7-24'},
                {dir:['w','west'],id:'9-24'},
                {dir:['n','north'],id:'8-26'}
            ],
        },
        {
            id:'8-24',
            name: '8th Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-23'},
                {dir:['e','east'],id:'7-24'},
                {dir:['w','west'],id:'9-24'},
                {dir:['n','north'],id:'8-25'}
            ],
        },
        {
            id:'8-23',
            name: '8th Avenue and 23th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-22'},
                {dir:['e','east'],id:'7-23'},
                {dir:['w','west'],id:'9-23'},
                {dir:['n','north'],id:'8-24'}
            ],
        },
        {
            id:'8-22',
            name: '8th Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-21'},
                {dir:['e','east'],id:'7-22'},
                {dir:['w','west'],id:'9-22'},
                {dir:['n','north'],id:'8-23'}
            ],
        },
        {
            id:'8-21',
            name: '8th Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-20'},
                {dir:['e','east'],id:'7-21'},
                {dir:['w','west'],id:'9-21'},
                {dir:['n','north'],id:'8-22'}
            ],
        },
        {
            id:'8-20',
            name: '8th Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-19'},
                {dir:['e','east'],id:'7-20'},
                {dir:['w','west'],id:'9-20'},
                {dir:['n','north'],id:'8-21'}
            ],
        },
        {
            id:'8-19',
            name: '8th Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-18'},
                {dir:['e','east'],id:'7-19'},
                {dir:['w','west'],id:'9-19'},
                {dir:['n','north'],id:'8-20'}
            ],
        },
        {
            id:'8-18',
            name: '8th Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-17'},
                {dir:['e','east'],id:'7-16'},
                {dir:['w','west'],id:'9-16'},
                {dir:['n','north'],id:'8-17'}
            ],
        },
        {
            id:'8-17',
            name: '8th Avenue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-16'},
                {dir:['e','east'],id:'7-17'},
                {dir:['w','west'],id:'9-17'},
                {dir:['n','north'],id:'8-18'}
            ],
        },
        {
            id:'8-16',
            name: '8th Avenue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-15'},
                {dir:['e','east'],id:'7-16'},
                {dir:['w','west'],id:'9-16'},
                {dir:['n','north'],id:'8-17'}
            ],
        },
        {
            id:'8-15',
            name: '8th Avenue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '8-14'},
                {dir:['e','east'],id:'7-15'},
                {dir:['w','west'],id:'9-15'},
                {dir:['n','north'],id:'8-16'}
            ],
        },
        {
            id:'8-14',
            name: '8th Avenue and 14th Street',
            desc:`Chelsea`,
            exits:[
                //exits neighborhood
                {dir:['s','south'],id: '8-13'},
                {dir:['e','east'],id:'7-14'},
                {dir:['w','west'],id:'9-14'},
                {dir:['n','north'],id:'8-15'}
            ],
        },
        //7th Ave
        {
            id:'7-34',
            name: '7th Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-33'},
                {dir:['e','east'],id:'amer-34'},
                {dir:['w','west'],id:'8-34'},
                //exits neighborhood
                {dir:['n','north'],id:'7-35'}
            ],
        },
        {
            id:'7-33',
            name: '7th Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-32'},
                {dir:['e','east'],id:'amer-33'},
                {dir:['w','west'],id:'8-33'},
                {dir:['n','north'],id:'7-34'}
            ],
        },
        {
            id:'7-32',
            name: '7th Avenue and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-31'},
                {dir:['e','east'],id:'amer-32'},
                {dir:['w','west'],id:'8-32'},
                {dir:['n','north'],id:'7-33'}
            ],
        },
        {
            id:'7-31',
            name: '7th Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-30'},
                {dir:['e','east'],id:'amer-31'},
                {dir:['w','west'],id:'8-31'},
                {dir:['n','north'],id:'7-32'}
            ],
        },
        {
            id:'7-30',
            name: '7th Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-29'},
                {dir:['e','east'],id:'amer-30'},
                {dir:['w','west'],id:'8-30'},
                {dir:['n','north'],id:'7-31'}
            ],
        },
        {
            id:'7-29',
            name: '7th Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-28'},
                {dir:['e','east'],id:'amer-29'},
                {dir:['w','west'],id:'8-29'},
                {dir:['n','north'],id:'7-30'}
            ],
        },
        {
            id:'7-28',
            name: '7th Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-27'},
                {dir:['e','east'],id:'amer-28'},
                {dir:['w','west'],id:'8-28'},
                {dir:['n','north'],id:'7-29'}
            ],
        },
        {
            id:'7-27',
            name: '7th Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-26'},
                {dir:['e','east'],id:'amer-27'},
                {dir:['w','west'],id:'8-27'},
                {dir:['n','north'],id:'7-28'}
            ],
        },
        {
            id:'7-26',
            name: '7th Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-25'},
                {dir:['e','east'],id:'amer-26'},
                {dir:['w','west'],id:'8-26'},
                {dir:['n','north'],id:'7-27'}
            ],
        },
        {
            id:'7-25',
            name: '7th Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-24'},
                {dir:['e','east'],id:'amer-25'},
                {dir:['w','west'],id:'8-25'},
                {dir:['n','north'],id:'7-26'}
            ],
        },
        {
            id:'7-24',
            name: '7th Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-23'},
                {dir:['e','east'],id:'amer-24'},
                {dir:['w','west'],id:'8-24'},
                {dir:['n','north'],id:'7-25'}
            ],
        },
        {
            id:'7-23',
            name: '7th Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-22'},
                {dir:['e','east'],id:'amer-23'},
                {dir:['w','west'],id:'8-23'},
                {dir:['n','north'],id:'7-24'}
            ],
        },
        {
            id:'7-22',
            name: '7th Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-21'},
                {dir:['e','east'],id:'amer-22'},
                {dir:['w','west'],id:'8-22'},
                {dir:['n','north'],id:'7-23'}
            ],
        },
        {
            id:'7-21',
            name: '7th Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-20'},
                {dir:['e','east'],id:'amer-21'},
                {dir:['w','west'],id:'8-21'},
                {dir:['n','north'],id:'7-21'}
            ],
        },
        {
            id:'7-20',
            name: '7th Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-19'},
                {dir:['e','east'],id:'amer-20'},
                {dir:['w','west'],id:'8-20'},
                {dir:['n','north'],id:'7-21'}
            ],
        },
        {
            id:'7-19',
            name: '7th Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-18'},
                {dir:['e','east'],id:'amer-19'},
                {dir:['w','west'],id:'8-19'},
                {dir:['n','north'],id:'7-20'}
            ],
        },
        {
            id:'7-18',
            name: '7th Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-17'},
                {dir:['e','east'],id:'amer-18'},
                {dir:['w','west'],id:'8-18'},
                {dir:['n','north'],id:'7-19'}
            ],
        },
        {
            id:'7-17',
            name: '7th Avenue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-16'},
                {dir:['e','east'],id:'amer-17'},
                {dir:['w','west'],id:'8-17'},
                {dir:['n','north'],id:'7-18'}
            ],
        },
        {
            id:'7-16',
            name: '7th Avenue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-15'},
                {dir:['e','east'],id:'amer-16'},
                {dir:['w','west'],id:'8-16'},
                {dir:['n','north'],id:'7-17'}
            ],
        },
        {
            id:'7-15',
            name: '7th Avenue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-14'},
                {dir:['e','east'],id:'amer-14'},
                {dir:['w','west'],id:'8-14'},
                {dir:['n','north'],id:'7-15'}
            ],
        },
        {
            id:'7-14',
            name: '7th Avenue and 14th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '7-13'},
                {dir:['e','east'],id:'amer-14'},
                {dir:['w','west'],id:'8-14'},
                {dir:['n','north'],id:'7-15'}
            ],
        },
        //6th Ave/Avenue of America
        {
            id:'amer-34',
            name: 'Avenue of America and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-33'},
                {dir:['e','east'],id:'broad-34'},
                {dir:['w','west'],id:'7-33'},
                {dir:['n','north'],id:'amer-35'}
            ],
        },
        {
            id:'amer-33',
            name: 'Avenue of America and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-32'},
                {dir:['e','east'],id:'broad-33'},
                {dir:['w','west'],id:'7-33'},
                {dir:['n','north'],id:'amer-34'}
            ],
        },
        {
            id:'amer-32',
            name: 'Avenue of America and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-31'},
                {dir:['e','east'],id:'broad-32'},
                {dir:['w','west'],id:'7-32'},
                {dir:['n','north'],id:'amer-33'}
            ],
        },
        {
            id:'amer-31',
            name: 'Avenue of America and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-30'},
                {dir:['e','east'],id:'broad-31'},
                {dir:['w','west'],id:'7-31'},
                {dir:['n','north'],id:'amer-32'}
            ],
        },
        {
            id:'amer-30',
            name: 'Avenue of America and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-29'},
                {dir:['e','east'],id:'broad-30'},
                {dir:['w','west'],id:'7-30'},
                {dir:['n','north'],id:'amer-31'}
            ],
        },
        {
            id:'amer-29',
            name: 'Avenue of America and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-28'},
                {dir:['e','east'],id:'broad-29'},
                {dir:['w','west'],id:'7-29'},
                {dir:['n','north'],id:'amer-30'}
            ],
        },
        {
            id:'amer-28',
            name: 'Avenue of America and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-27'},
                {dir:['e','east'],id:'broad-28'},
                {dir:['w','west'],id:'7-28'},
                {dir:['n','north'],id:'amer-29'}
            ],
        },
        {
            id:'amer-27',
            name: 'Avenue of America and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-26'},
                {dir:['e','east'],id:'broad-27'},
                {dir:['w','west'],id:'amer-27'},
                {dir:['n','north'],id:'amer-28'}
            ],
        },
        {
            id:'amer-26',
            name: 'Avenue of America and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-25'},
                {dir:['e','east'],id:'broad-26'},
                {dir:['w','west'],id:'amer-26'},
                {dir:['n','north'],id:'amer-27'}
            ],
        },
        {
            id:'amer-25',
            name: 'Avenue of America and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-24'},
                {dir:['e','east'],id:'broad-25'},
                {dir:['w','west'],id:'7-25'},
                {dir:['n','north'],id:'amer-26'}
            ],
        },
        {
            id:'amer-24',
            name: 'Avenue of America and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-23'},
                {dir:['e','east'],id:'broad-24'},
                {dir:['w','west'],id:'7-24'},
                {dir:['n','north'],id:'amer-25'}
            ],
        },
        {
            id:'amer-23',
            name: 'Avenue of America and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-22'},
                {dir:['e','east'],id:'5-23'},
                {dir:['w','west'],id:'7-23'},
                {dir:['n','north'],id:'amer-24'}
            ],
        },
        {
            id:'amer-22',
            name: 'Avenue of America and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-21'},
                {dir:['e','east'],id:'5-22'},
                {dir:['w','west'],id:'7-22'},
                {dir:['n','north'],id:'amer-23'}
            ],
        },
        {
            id:'amer-21',
            name: 'Avenue of America and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-20'},
                {dir:['e','east'],id:'5-21'},
                {dir:['w','west'],id:'7-21'},
                {dir:['n','north'],id:'amer-22'}
            ],
            
        },
        {
            id:'amer-20',
            name: 'Avenue of America and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-19'},
                {dir:['e','east'],id:'5-20'},
                {dir:['w','west'],id:'7-20'},
                {dir:['n','north'],id:'amer-21'
                }
            ],
        },
        {
            id:'amer-19',
            name: 'Avenue of America and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-18'},
                {dir:['e','east'],id:'5-18'},
                {dir:['w','west'],id:'7-18'},
                {dir:['n','north'],id:'amer-20'}
            ],
        },
        {
            id:'amer-18',
            name: 'Avenue of America and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-17'},
                {dir:['e','east'],id:'5-18'},
                {dir:['w','west'],id:'7-18'},
                {dir:['n','north'],id:'amer-19'}
            ],
        },
        {
            id:'amer-17',
            name: 'Avenue of America and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-16'},
                {dir:['e','east'],id:'5-17'},
                {dir:['w','west'],id:'7-17'},
                {dir:['n','north'],id:'amer-18'}
            ],
        },
        {
            id:'amer-16',
            name: 'Avenue of America and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-15'},
                {dir:['e','east'],id:'5-16'},
                {dir:['w','west'],id:'7-16'},
                {dir:['n','north'],id:'amer-17'}
            ],
        },
        {
            id:'amer-15',
            name: 'Avenue of America and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'amer-14'},
                {dir:['e','east'],id:'5-15'},
                {dir:['w','west'],id:'7-15'},
                {dir:['n','north'],id:'amer-16'}
            ],
        },
        {
            id:'amer-14',
            name: 'Avenue of America and 14th Street',
            desc:``,
            exits:[
                //exits neighborhood
                {dir:['s','south'],id: 'amer-13'},
                {dir:['e','east'],id:'5-14'},
                {dir:['w','west'],id:'7-14'},
                {dir:['n','north'],id:'amer-15'}
            ],
        },
        //Broadway
        {
            id:'broa-amer',
            name: 'Avenue of America and Broadway',
            desc:``,
        },
        {
            id:'broa-33',
            name: 'Broadway and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-32'},
                {dir:['e','east'],id:'5-33'},
                {dir:['w','west'],id:'amer-33'},
                {dir:['n','north'],id:'broa-6'}
            ],
        },
        {
            id:'broa-32',
            name: 'Broadway and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-31'},
                {dir:['e','east'],id:'5-32'},
                {dir:['w','west'],id:'amer-32'},
                {dir:['n','north'],id:'broa-33'}
            ],
        },
        {
            id:'broa-31',
            name: 'Broadway and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-30'},
                {dir:['e','east'],id:'5-31'},
                {dir:['w','west'],id:'amer-31'},
                {dir:['n','north'],id:'broa-32'}
            ],
        },
        {
            id:'broa-30',
            name: 'Broadway and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-29'},
                {dir:['e','east'],id:'5-30'},
                {dir:['w','west'],id:'amer-30'},
                {dir:['n','north'],id:'broa-31'}
            ],
        },
        {
            id:'broa-29',
            name: 'Broadway and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-28'},
                {dir:['e','east'],id:'5-29'},
                {dir:['w','west'],id:'amer-29'},
                {dir:['n','north'],id:'broa-30'}
            ],
        },
        {
            id:'broa-28',
            name: 'Broadway and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-27'},
                {dir:['e','east'],id:'5-27'},
                {dir:['w','west'],id:'amer-27'},
                {dir:['n','north'],id:'broa-29'
                }
            ],
        },
        {
            id:'broa-27',
            name: 'Broadway and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-26'},
                {dir:['e','east'],id:'5-27'},
                {dir:['w','west'],id:'amer-27'},
                {dir:['n','north'],id:'broa-28'}
            ],
        },
        {
            id:'broa-26',
            name: 'Broadway and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-25'},
                {dir:['e','east'],id:'5-26'},
                {dir:['w','west'],id:'amer-26'},
                {dir:['n','north'],id:'broa-27'}
            ],
        },
        {
            id:'broa-25',
            name: 'Broadway and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-24'},
                {dir:['e','east'],id:'5-25'},
                {dir:['w','west'],id:'amer-25'},
                {dir:['n','north'],id:'broa-26'}
            ],
        },
        {
            id:'broa-5',
            name: 'Broadway and 5th Avenue',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-24'},
                {dir:['e','east'],id:'broa-23'},
                {dir:['w','west'],id:'broa-25'},
                {dir:['n','north'],id:'5-25'}
            ],
        },
        {
            id:'broa-23',
            name: 'Broadway and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-22'},
                {dir:['e','east'],id:'madi-23'},
                {dir:['w','west'],id:'5-23'},
                {dir:['n','north'],id:'5-24'}
            ],
        },
        {
            id:'broa-22',
            name: 'Broadway and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-21'},
                {dir:['e','east'],id:'park-22'},
                {dir:['w','west'],id:'5-22'},
                {dir:['n','north'],id:'broa-23'}
            ],
        },
        {
            id:'broa-21',
            name: 'Broadway and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-20'},
                {dir:['e','east'],id:'park-21'},
                {dir:['w','west'],id:'5-21'},
                {dir:['n','north'],id:'broa-22'}
            ],
        },
        {
            id:'broa-20',
            name: 'Broadway and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-19'},
                {dir:['e','east'],id:'park-20'},
                {dir:['w','west'],id:'5-20'},
                {dir:['n','north'],id:'broa-21'}
            ],
        },
        {
            id:'broa-19',
            name: 'Broadway and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-18'},
                {dir:['e','east'],id:'park-19'},
                {dir:['w','west'],id:'5-19'},
                {dir:['n','north'],id:'broa-20'}
            ],
        },
        {
            id:'broa-18',
            name: 'Broadway and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'unio-17-1'},
                {dir:['e','east'],id:'park-18'},
                {dir:['w','west'],id:'5-18'},
                {dir:['n','north'],id:'broa-19'}
            ],
        },
        //5th Ave
        {
            id:'5-34',
            name: '5th Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-33'},
                {dir:['e','east'],id:'madi-34'},
                {dir:['w','west'],id:'broa-6'},
                {dir:['n','north'],id:'5-35'}
            ],
        },
        {
            id:'5-33',
            name: '5th Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-32'},
                {dir:['e','east'],id:'madi-33'},
                {dir:['w','west'],id:'broa-33'},
                {dir:['n','north'],id:'5-34'}
            ],
        },
        {
            id:'5-32',
            name: '5th Avenue and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-31'},
                {dir:['e','east'],id:'madi-32'},
                {dir:['w','west'],id:'broa-32'},
                {dir:['n','north'],id:'5-33'}
            ],
        },
        {
            id:'5-31',
            name: '5th Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-30'},
                {dir:['e','east'],id:'madi-31'},
                {dir:['w','west'],id:'broa-31'},
                {dir:['n','north'],id:'5-32'}
            ],
        },
        {
            id:'5-30',
            name: '5th Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-29'},
                {dir:['e','east'],id:'madi-30'},
                {dir:['w','west'],id:'broa-30'},
                {dir:['n','north'],id:'5-31'}
            ],
        },
        {
            id:'5-29',
            name: '5th Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-28'},
                {dir:['e','east'],id:'madi-29'},
                {dir:['w','west'],id:'broa-29'},
                {dir:['n','north'],id:'5-30'}
            ],
        },
        {
            id:'5-28',
            name: '5th Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-27'},
                {dir:['e','east'],id:'madi-28'},
                {dir:['w','west'],id:'broa-28'},
                {dir:['n','north'],id:'5-29'}
            ],
        },
        {
            id:'5-27',
            name: '5th Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-26'},
                {dir:['e','east'],id:'madi-27'},
                {dir:['w','west'],id:'broa-27'},
                {dir:['n','north'],id:'5-28'}
            ],
        },
        {
            id:'5-26',
            name: '5th Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-25'},
                {dir:['e','east'],id:'madi-26'},
                {dir:['w','west'],id:'broa-26'},
                {dir:['n','north'],id:'5-27'}
            ],
        },
        {
            id:'5-25',
            name: '5th Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-5'},
                {dir:['w','west'],id:'broa-25'},
                {dir:['n','north'],id:'5-26'}
            ],
        },
        {
            id:'5-24',
            name: '5th Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-23'},
                {dir:['e','east'],id:'amer-24'},
                {dir:['w','west'],id:'broa-24'},
                {dir:['n','north'],id:'broa-5'}
            ],
        },
        {
            id:'5-23',
            name: '5th Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-22'},
                {dir:['e','east'],id:'amer-23'},
                {dir:['w','west'],id:'broa-23'},
                {dir:['n','north'],id:'5-24'}
            ],
        },
        {
            id:'5-22',
            name: '5th Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-21'},
                {dir:['e','east'],id:'amer-22'},
                {dir:['w','west'],id:'broa-22'},
                {dir:['n','north'],id:'5-23'}
            ],
        },
        {
            id:'5-21',
            name: '5th Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-20'},
                {dir:['e','east'],id:'amer-21'},
                {dir:['w','west'],id:'broa-21'},
                {dir:['n','north'],id:'5-22'}
            ],
        },
        {
            id:'5-20',
            name: '5th Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-19'},
                {dir:['e','east'],id:'amer-20'},
                {dir:['w','west'],id:'broa-20'},
                {dir:['n','north'],id:'5-21'}
            ],
        },
        {
            id:'5-19',
            name: '5th Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-18'},
                {dir:['e','east'],id:'amer-19'},
                {dir:['w','west'],id:'broa-19'},
                {dir:['n','north'],id:'5-20'}
            ],
        },
        {
            id:'5-18',
            name: '5th Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-17'},
                {dir:['e','east'],id:'amer-18'},
                {dir:['w','west'],id:'broa-18'},
                {dir:['n','north'],id:'5-19'}
            ],
        },
        {
            id:'5-17',
            name: '5th Avenue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-16'},
                {dir:['e','east'],id:'amer-17'},
                {dir:['w','west'],id:'unio-17-1'},
                {dir:['n','north'],id:'5-18'}
            ],
        },
        {
            id:'5-16',
            name: '5th Avenue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-15'},
                {dir:['e','east'],id:'amer-16'},
                {dir:['w','west'],id:'unio-16-1'},
                {dir:['n','north'],id:'5-17'}
            ],
        },
        {
            id:'5-15',
            name: '5th Avenue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-14'},
                {dir:['e','east'],id:'amer-15'},
                {dir:['w','west'],id:'unio-15-1'},
                {dir:['n','north'],id:'5-16'}
            ],
        },
        {
            id:'5-14',
            name: '5th Avenue and 14th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5-13'},
                {dir:['e','east'],id:'amer-14'},
                {dir:['w','west'],id:'unio-14-1'},
                {dir:['n','north'],id:'5-15'}
            ],
        },
        //Madison Ave
        {
            id:'madi-34',
            name: 'Madison Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'madi-33'},
                {dir:['e','east'],id:'5-34'},
                {dir:['w','west'],id:'park-34'},
                {dir:['n','north'],id:'madi-35'}
            ],
        },
        {
            id:'madi-33',
            name: 'Madison Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'madi-32'},
                {dir:['e','east'],id:'5-33'},
                {dir:['w','west'],id:'park-33'},
                {dir:['n','north'],id:'madi-34'}
            ],
        },
        {
            id:'madi-32',
            name: 'Madison Avenue and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'madi-31'},
                {dir:['e','east'],id:'5-32'},
                {dir:['w','west'],id:'park-32'},
                {dir:['n','north'],id:'madi-33'}
            ],
        },
        {
            id:'madi-31',
            name: 'Madison Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'madi-30'},
                {dir:['e','east'],id:'5-31'},
                {dir:['w','west'],id:'park-31'},
                {dir:['n','north'],id:'madi-32'}
            ],
        },
        {
            id:'madi-30',
            name: 'Madison Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'madi-29'},
                {dir:['e','east'],id:'5-30'},
                {dir:['w','west'],id:'park-30'},
                {dir:['n','north'],id:'madi-31'}
            ],
        },
        {
            id:'madi-29',
            name: 'Madison Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'madi-28'},
                {dir:['e','east'],id:'5-29'},
                {dir:['w','west'],id:'park-29'},
                {dir:['n','north'],id:'madi-30'}
            ],
        },
        {
            id:'madi-28',
            name: 'Madison Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'madi-27'},
                {dir:['e','east'],id:'5-28'},
                {dir:['w','west'],id:'park-28'},
                {dir:['n','north'],id:'madi-29'}
            ],
        },
        {
            id:'madi-27',
            name: 'Madison Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'madi-26'},
                {dir:['e','east'],id:'5-27'},
                {dir:['w','west'],id:'park-27'},
                {dir:['n','north'],id:'madi-28'}
            ],
        },
        {
            id:'madi-26',
            name: 'Madison Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'madi-25'},
                {dir:['e','east'],id:'5-26'},
                {dir:['w','west'],id:'park-26'},
                {dir:['n','north'],id:'madi-27'}
            ],
        },
        {
            id:'madi-25',
            name: 'Madison Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'madi-26'},
                {dir:['w','west'],id:'park-35'},
                {dir:['n','north'],id:'madi-24'}
            ],
        },
        {
            id:'madi-24',
            name: 'Madison Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'madi-25'},
                {dir:['w','west'],id:'park-24'},
                {dir:['n','north'],id:'madi-23'}
            ],
        },
        {
            id:'madi-23',
            name: 'Madison Avenue and 23th Street',
            desc:``,
            exits:[
                {dir:['e','east'],id:'broa-23'},
                {dir:['w','west'],id:'park-34'},
                {dir:['n','north'],id:'madi-24'}
            ],
        },
        //Union Square West and East
        {
            id:'unio-17-1',
            name: 'Union Sqaure West and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'unio-16-1'},
                {dir:['w','west'],id:'5-17'},
                {dir:['n','north'],id:'broa-18'}
            ],
        },
        {
            id:'unio-16-1',
            name: 'Union Square West and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'unio-w-15'},
                {dir:['e','east'],id:'5-16'},
                {dir:['n','north'],id:'unio-w-17'}
            ],
        },
        {
            id:'unio-15-1',
            name: 'Union Square West and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'unio-14-1'},
                {dir:['e','east'],id:'5-15'},
                {dir:['n','north'],id:'unio-16-1'}
            ],
        },
        {
            id:'unio-14-1',
            name: 'Union Square West and 14th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'univ-13'},
                {dir:['w','west'],id:'unio-14-2'},
                {dir:['e','east'],id:'5-14'},
                {dir:['n','north'],id:'unio-15-1'}
            ],
        },
        {
            id:'unio-17-2',
            name: 'Union Square East and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'unio-16-2'},
                {dir:['w','west'],id:'unio-17-1'},
                {dir:['e','east'],id:'irvi-17'},
                {dir:['n','north'],id:'park-18'}
            ],
        },
        {
            id:'unio-16-2',
            name: 'Union Square East and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'unio-15-2'},
                {dir:['e','east'],id:'irvi-16'},
                {dir:['n','north'],id:'unio-17-2'}
            ],
        },
        {
            id:'unio-15-2',
            name: 'Union Sqaure East and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'unio-14-2'},
                {dir:['e','east'],id:'irvi-15'},
                {dir:['n','north'],id:'unio-16-2'}
            ],
        },
        {
            id:'unio-14-2',
            name: 'Union Square East and 14th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: ''},
                {dir:['w','west'],id:'unio-14-2'},
                {dir:['e','east'],id:'irvi-14'},
                {dir:['n','north'],id:'unio-15-2'}
            ],
        },
        //triangular exit from the district 4th Ave and 14th.
        //Park Ave
        {
            id:'park-34',
            name: 'Park Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-33'},
                {dir:['w','west'],id:'madi-34'},
                {dir:['e','east'],id:'lexi-34'},
                {dir:['n','north'],id:'park-35'}
            ],
        },
        {
            id:'park-33',
            name: 'Park Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-32'},
                {dir:['w','west'],id:'madi-33'},
                {dir:['e','east'],id:'lexi-33'},
                {dir:['n','north'],id:'park-34'}
            ],
        },
        {
            id:'park-32',
            name: 'Park Avenue and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-31'},
                {dir:['w','west'],id:'madi-32'},
                {dir:['e','east'],id:'lexi-32'},
                {dir:['n','north'],id:'park-33'}
            ],
        },
        {
            id:'park-31',
            name: 'Park Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-30'},
                {dir:['w','west'],id:'madi-31'},
                {dir:['e','east'],id:'lexi-31'},
                {dir:['n','north'],id:'park-32'}
            ],
        },
        {
            id:'park-30',
            name: 'Park Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-29'},
                {dir:['w','west'],id:'madi-30'},
                {dir:['e','east'],id:'lexi-30'},
                {dir:['n','north'],id:'park-31'}
            ],
        },
        {
            id:'park-29',
            name: 'Park Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-28'},
                {dir:['w','west'],id:'madi-29'},
                {dir:['e','east'],id:'lexi-29'},
                {dir:['n','north'],id:'park-30'}
            ],
        },
        {
            id:'park-28',
            name: 'Park Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-27'},
                {dir:['w','west'],id:'madi-28'},
                {dir:['e','east'],id:'lexi-28'},
                {dir:['n','north'],id:'park-29'}
            ],
        },
        {
            id:'park-27',
            name: 'Park Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-26'},
                {dir:['w','west'],id:'madi-25'},
                {dir:['e','east'],id:'lexi-25'},
                {dir:['n','north'],id:'park-26'}
            ],
        },
        {
            id:'park-26',
            name: 'Park Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-25'},
                {dir:['w','west'],id:'madi-24'},
                {dir:['e','east'],id:'lexi-24'},
                {dir:['n','north'],id:'park-27'}
            ],
        },
        {
            id:'park-25',
            name: 'Park Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-24'},
                {dir:['w','west'],id:'madi-25'},
                {dir:['e','east'],id:'lexi-25'},
                {dir:['n','north'],id:'park-26'}
            ],
        },
        {
            id:'park-24',
            name: 'Park Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-23'},
                {dir:['w','west'],id:'madi-24'},
                {dir:['e','east'],id:'lexi-24'},
                {dir:['n','north'],id:'park-25'}
            ],
        },
        {
            id:'park-23',
            name: 'Park Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-22'},
                {dir:['w','west'],id:'madi-23'},
                {dir:['e','east'],id:'lexi-23'},
                {dir:['n','north'],id:'park-24'}
            ],
        },
        {
            id:'park-22',
            name: 'Park Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-21'},
                {dir:['w','west'],id:'broa-22'},
                {dir:['e','east'],id:'lexi-22'},
                {dir:['n','north'],id:'park-23'}
            ],
        },
        {
            id:'park-21',
            name: 'Park Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-20'},
                {dir:['w','west'],id:'broa-21'},
                {dir:['e','east'],id:'gram-21-1'},
                {dir:['n','north'],id:'park-22'}
            ],
        },
        {
            id:'park-20',
            name: 'Park Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-19'},
                {dir:['w','west'],id:'broa-20'},
                {dir:['e','east'],id:'gram-20-1'},
                {dir:['n','north'],id:'park-21'}
            ],
        },
        {
            id:'park-19',
            name: 'Park Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'park-18'},
                {dir:['w','west'],id:'broa-19'},
                {dir:['e','east'],id:'irvi-19'},
                {dir:['n','north'],id:'park-20'}
            ],
        },
        {
            id:'park-18',
            name: 'Park Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'unio-17-2'},
                {dir:['w','west'],id:'broa-18'},
                {dir:['e','east'],id:'irvi-34'},
                {dir:['n','north'],id:'park-19'}
            ],
        },
        //Lexington Ave
        {
            id:'lexi-34',
            name: 'Lexington Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-33'},
                {dir:['w','west'],id:'park-34'},
                {dir:['e','east'],id:'3-34'},
                {dir:['n','north'],id:'lexi-35'}
            ],
        },
        {
            id:'lexi-33',
            name: 'Lexington Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-32'},
                {dir:['w','west'],id:'park-33'},
                {dir:['e','east'],id:'3-33'},
                {dir:['n','north'],id:'lexi-34'}
            ],
        },
        {
            id:'lexi-32',
            name: 'Lexington Avenue and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-31'},
                {dir:['w','west'],id:'park-32'},
                {dir:['e','east'],id:'3-32'},
                {dir:['n','north'],id:'lexi-33'}
            ],
        },
        {
            id:'lexi-31',
            name: 'Lexington Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-30'},
                {dir:['w','west'],id:'park-31'},
                {dir:['e','east'],id:'3-31'},
                {dir:['n','north'],id:'lexi-32'}
            ],
        },
        {
            id:'lexi-30',
            name: 'Lexington Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-29'},
                {dir:['w','west'],id:'park-30'},
                {dir:['e','east'],id:'3-30'},
                {dir:['n','north'],id:'lexi-31'}
            ],
        },
        {
            id:'lexi-29',
            name: 'Lexington Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-28'},
                {dir:['w','west'],id:'park-29'},
                {dir:['e','east'],id:'3-29'},
                {dir:['n','north'],id:'lexi-30'}
            ],
        },
        {
            id:'lexi-28',
            name: 'Lexington Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-27'},
                {dir:['w','west'],id:'park-28'},
                {dir:['e','east'],id:'3-28'},
                {dir:['n','north'],id:'lexi-29'}
            ],
        },
        {
            id:'lexi-27',
            name: 'Lexington Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-26'},
                {dir:['w','west'],id:'park-27'},
                {dir:['e','east'],id:'3-27'},
                {dir:['n','north'],id:'lexi-28'}
            ],
        },
        {
            id:'lexi-26',
            name: 'Lexington Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-25'},
                {dir:['w','west'],id:'park-26'},
                {dir:['e','east'],id:'3-26'},
                {dir:['n','north'],id:'lexi-27'}
            ],
        },
        {
            id:'lexi-25',
            name: 'Lexington Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-24'},
                {dir:['w','west'],id:'park-25'},
                {dir:['e','east'],id:'3-25'},
                {dir:['n','north'],id:'lexi-26'}
            ],
        },
        {
            id:'lexi-24',
            name: 'Lexington Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-23'},
                {dir:['w','west'],id:'park-24'},
                {dir:['e','east'],id:'3-24'},
                {dir:['n','north'],id:'lexi-25'}
            ],
        },
        {
            id:'lexi-23',
            name: 'Lexington Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-22'},
                {dir:['w','west'],id:'park-23'},
                {dir:['e','east'],id:'3-23'},
                {dir:['n','north'],id:'lexi-24'}
            ],
        },
        {
            id:'lexi-22',
            name: 'Lexington Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'lexi-21'},
                {dir:['w','west'],id:'park-22'},
                {dir:['e','east'],id:'3-22'},
                {dir:['n','north'],id:'lexi-23'}
            ],
        },
        {
            id:'lexi-21',
            name: 'Lexington Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['w','west'],id:'gram-21-1'},
                {dir:['e','east'],id:'gram-21-2'},
                {dir:['n','north'],id:'lexi-22'}
            ],
        },
        //Gramercy Park East and West
        {
            id:'gram-21-1',
            name: 'Gramercy Park West and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'gram-20-1'},
                {dir:['w','west'],id:'park-21'},
                {dir:['e','east'],id:'lexi-21'},
            ],
        },
        {
            id:'gram-20-1',
            name: 'Gramercy Park West and 20th Street',
            desc:``,
            exits:[
                {dir:['w','west'],id:'park-20'},
                {dir:['e','east'],id:'irvi-20'},
                {dir:['n','north'],id:'gram-21-1'}
            ],
        },
        {
            id:'gram-21-2',
            name: 'Gramercy Park East and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'gram-20-2'},
                {dir:['w','west'],id:'lexi-21'},
                {dir:['e','east'],id:'3-21'},
            ],
        },
        {
            id:'gram-20-2',
            name: 'Gramercy Park East and 20th Street',
            desc:``,
            exits:[
                {dir:['w','west'],id:'irvi-20'},
                {dir:['e','east'],id:'3-20'},
                {dir:['n','north'],id:'gram-31-2'}
            ],
        },
        //Irving Plaza
        {
            id:'irvi-20',
            name: 'Irving Plaza and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'irvi-19'},
                {dir:['w','west'],id:'gram-20-1'},
                {dir:['e','east'],id:'gram-20-2'},
            ],
        },
        {
            id:'irvi-19',
            name: 'Irving Plaza and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'irvi-18'},
                {dir:['w','west'],id:'park-19'},
                {dir:['e','east'],id:'3-19'},
                {dir:['n','north'],id:'irvi-20'}
            ],
        },
        {
            id:'irvi-18',
            name: 'Irving Plaza and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'irvi-17'},
                {dir:['w','west'],id:'park-18'},
                {dir:['e','east'],id:'3-18'},
                {dir:['n','north'],id:'irvi-19'}
            ],
        },
        {
            id:'irvi-17',
            name: 'Irving Plaza and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'irvi-16'},
                {dir:['w','west'],id:'unio-17-2'},
                {dir:['e','east'],id:'3-17'},
                {dir:['n','north'],id:'irvi-18'}
            ],
        },
        {
            id:'irvi-16',
            name: 'Irving Plaza and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'irvi-15'},
                {dir:['w','west'],id:'unio-16-2'},
                {dir:['e','east'],id:'3-16'},
                {dir:['n','north'],id:'irvi-17'}
            ],
        },
        {
            id:'irvi-15',
            name: 'Irving Plaza and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'irvi-14'},
                {dir:['w','west'],id:'unio-15-2'},
                {dir:['e','east'],id:'3-15'},
                {dir:['n','north'],id:'irvi-16'}
            ],
        },
        {
            id:'irvi-14',
            name: 'Irving Plaza and 14th Street',
            desc:``,
            exits:[
                {dir:['w','west'],id:'unio-14-1'},
                {dir:['e','east'],id:'3-14'},
                {dir:['n','north'],id:'irvi-15'}
            ],
        },
        //3rd Ave
        {
            id:'3-34',
            name: '3rd Avenue and 34th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-33'},
                {dir:['w','west'],id:'2-34'},
                {dir:['e','east'],id:'lexi-34'},
                {dir:['n','north'],id:'3-35'}
            ],
        },
        {
            id:'3-33',
            name: '3rd Avenue and 33rd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-32'},
                {dir:['w','west'],id:'2-33'},
                {dir:['e','east'],id:'lexi-33'},
                {dir:['n','north'],id:'3-34'}
            ],
        },
        {
            id:'3-32',
            name: '3rd Avenue and 32nd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-31'},
                {dir:['w','west'],id:'2-33'},
                {dir:['e','east'],id:'lexi-33'},
                {dir:['n','north'],id:'3-33'}
            ],
        },
        {
            id:'3-31',
            name: '3rd Avenue and 31st Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-30'},
                {dir:['w','west'],id:'2-31'},
                {dir:['e','east'],id:'lexi-31'},
                {dir:['n','north'],id:'3-32'}
            ],
        },
        {
            id:'3-30',
            name: '3rd Avenue and 30th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-29'},
                {dir:['w','west'],id:'2-30'},
                {dir:['e','east'],id:'lexi-30'},
                {dir:['n','north'],id:'3-31'}
            ],
        },
        {
            id:'3-29',
            name: '3rd Avenue and 29th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-28'},
                {dir:['w','west'],id:'2-29'},
                {dir:['e','east'],id:'lexi-29'},
                {dir:['n','north'],id:'3-30'}
            ],
        },
        {
            id:'3-28',
            name: '3rd Avenue and 28th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-27'},
                {dir:['w','west'],id:'2-28'},
                {dir:['e','east'],id:'lexi-28'},
                {dir:['n','north'],id:'3-29'}
            ],
        },
        {
            id:'3-27',
            name: '3rd Avenue and 27th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-26'},
                {dir:['w','west'],id:'2-27'},
                {dir:['e','east'],id:'lexi-27'},
                {dir:['n','north'],id:'3-28'}
            ],
        },
        {
            id:'3-26',
            name: '3rd Avenue and 26th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-25'},
                {dir:['w','west'],id:'2-26'},
                {dir:['e','east'],id:'lexi-26'},
                {dir:['n','north'],id:'3-27'}
            ],
        },
        {
            id:'3-25',
            name: '3rd Avenue and 25th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-24'},
                {dir:['w','west'],id:'2-25'},
                {dir:['e','east'],id:'lexi-25'},
                {dir:['n','north'],id:'3-26'}
            ],
        },
        {
            id:'3-24',
            name: '3rd Avenue and 24th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-23'},
                {dir:['w','west'],id:'2-24'},
                {dir:['e','east'],id:'lexi-24'},
                {dir:['n','north'],id:'3-25'}
            ],
        },
        {
            id:'3-23',
            name: '3rd Avenue and 23rd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-22'},
                {dir:['w','west'],id:'2-23'},
                {dir:['e','east'],id:'lexi-23'},
                {dir:['n','north'],id:'3-24'}
            ],
        },
        {
            id:'3-22',
            name: '3rd Avenue and 22nd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-21'},
                {dir:['w','west'],id:'2-22'},
                {dir:['e','east'],id:'lexi-22'},
                {dir:['n','north'],id:'3-23'
                }
            ],
        },
        {
            id:'3-21',
            name: '3rd Avenue and 21st Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-20'},
                {dir:['w','west'],id:'2-20'},
                {dir:['e','east'],id:'gram-21-2'},
                {dir:['n','north'],id:'3-22'}
            ],
        },
        {
            id:'3-20',
            name: '3rd Avenue and 20th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-19'},
                {dir:['w','west'],id:'2-20'},
                {dir:['e','east'],id:'gram-20-2'},
                {dir:['n','north'],id:'3-21'
                }
            ],
        },
        {
            id:'3-19',
            name: '3rd Avenue and 19th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-18'},
                {dir:['w','west'],id:'2-19'},
                {dir:['e','east'],id:'irvi-19'},
                {dir:['n','north'],id:'3-20'
                }
            ],
        },
        {
            id:'3-18',
            name: '3rd Avenue and 18th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-17'},
                {dir:['w','west'],id:'2-18'},
                {dir:['e','east'],id:'irvi-18'},
                {dir:['n','north'],id:'3-19'}
            ],
        },
        {
            id:'3-17',
            name: '3rd Avenue and 17th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-16'},
                {dir:['w','west'],id:'ruth-17'},
                {dir:['e','east'],id:'irvi-17'},
                {dir:['n','north'],id:'3-18'}
            ],
        },
        {
            id:'3-16',
            name: '3rd Avenue and 16th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-15'},
                {dir:['w','west'],id:'ruth-16'},
                {dir:['e','east'],id:'irvi-16'},
                {dir:['n','north'],id:'3-17'}
            ],
        },
        {
            id:'3-15',
            name: '3rd Avenue and 15th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-14'},
                {dir:['w','west'],id:'ruth-15'},
                {dir:['e','east'],id:'irvi-15'},
                {dir:['n','north'],id:'3-16'}
            ],
        },
        {
            id:'3-14',
            name: '3rd Avenue and 14th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '3-13'},
                {dir:['w','west'],id:'2-14'},
                {dir:['e','east'],id:'irvi-14'},
                {dir:['n','north'],id:'3-15'}
            ],
        },
        //2nd Ave
        {
            id:'2-34',
            name: '2nd Avenue and 34th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-33'},
                {dir:['e','west'],id:'1-34'},
                {dir:['w','west'],id:'1-34'},
                {dir:['n','north'],id:'2-35'}
            ],
        },
        {
            id:'2-33',
            name: '2nd Avenue and 33rd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-32'},
                {dir:['e','west'],id:'1-33'},
                {dir:['w','west'],id:'1-33'},
                {dir:['n','north'],id:'2-34'}
            ],
        },
        {
            id:'2-32',
            name: '2nd Avenue and 32nd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-31'},
                {dir:['w','west'],id:'1-32'},
                {dir:['n','north'],id:'2-33'}
            ],
        },
        {
            id:'2-31',
            name: '2nd Avenue and 31st Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-30'},
                {dir:['e','west'],id:'1-31'},
                {dir:['n','north'],id:'2-32'}
            ],
        },
        {
            id:'2-30',
            name: '2nd Avenue and 30th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-29'},
                {dir:['e','west'],id:'1-30'},
                {dir:['w','west'],id:'1-30'},
                {dir:['n','north'],id:'2-31'}
            ],
        },
        {
            id:'2-29',
            name: '2nd Avenue and 29th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-28'},
                {dir:['e','west'],id:'1-29'},
                {dir:['w','west'],id:'1-29'},
                {dir:['n','north'],id:'2-30'}
            ],
        },
        {
            id:'2-28',
            name: '2nd Avenue and 28th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-27'},
                {dir:['e','west'],id:'car-28'},
                {dir:['w','west'],id:'3-28'},
                {dir:['n','north'],id:'2-29'}
            ],
        },
        {
            id:'2-27',
            name: '2nd Avenue and 27th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-26'},
                {dir:['e','east'],id:'1-27'},
                {dir:['w','west'],id:'3-27'},
                {dir:['n','north'],id:'2-28'}
            ],
        },
        {
            id:'2-26',
            name: '2nd Avenue and 26th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-25'},
                {dir:['e','east'],id:'car-26'},
                {dir:['w','west'],id:'3-26'},
                {dir:['n','north'],id:'2-27'}
            ],
        },
        {
            id:'2-25',
            name: '2nd Avenue and 25th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-24'},
                {dir:['e','east'],id:'1-25'},
                {dir:['w','west'],id:'3-25'},
                {dir:['n','north'],id:'2-26'}
            ],
        },
        {
            id:'2-24',
            name: '2nd Avenue and 24th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-23'},
                {dir:['e','east'],id:'1-22'},
                {dir:['w','west'],id:'3-22'},
                {dir:['n','north'],id:'2-25'}
            ],
        },
        {
            id:'2-23',
            name: '2nd Avenue and 23rd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-22'},
                {dir:['e','east'],id:'1-23'},
                {dir:['w','west'],id:'3-23'},
                {dir:['n','north'],id:'2-24'}
            ],
        },
        {
            id:'2-22',
            name: '2nd Avenue and 22nd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-21'},
                {dir:['e','east'],id:'1-22'},
                {dir:['w','west'],id:'3-22'},
                {dir:['n','north'],id:'2-23'}
            ],
        },
        {
            id:'2-21',
            name: '2nd Avenue and 31st Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-20'},
                {dir:['e','east'],id:'1-21'},
                {dir:['w','west'],id:'3-21'},
                {dir:['n','north'],id:'2-22'}
            ],
        },
        {
            id:'2-20',
            name: '2nd Avenue and 30th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-19'},
                {dir:['e','east'],id:'1-20'},
                {dir:['w','west'],id:'3-20'},
                {dir:['n','north'],id:'2-21'}
            ],
        },
        {
            id:'2-19',
            name: '2nd Avenue and 19th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-18'},
                {dir:['e','east'],id:'1-19'},
                {dir:['w','west'],id:'3-19'},
                {dir:['n','north'],id:'2-20'}
            ],
        },
        {
            id:'2-18',
            name: '2nd Avenue and 18th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-17'},
                {dir:['e','east'],id:'1-18'},
                {dir:['w','west'],id:'3-18'},
                {dir:['n','north'],id:'2-19'}
            ],
        },
        {
            id:'2-17',
            name: '2nd Avenue and 17th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-15'},
                {dir:['e','east'],id:'nath-17'},
                {dir:['w','west'],id:'ruth-17'},
                {dir:['n','north'],id:'2-18'}
            ],
        },
        {
            id:'2-15',
            name: '2nd Avenue and 16th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-14'},
                {dir:['e','east'],id:'nath-15'},
                {dir:['w','west'],id:'ruth-15'},
                {dir:['n','north'],id:'2-17'}
            ],
        },        
        {
            id:'2-14',
            name: '2nd Avenue and 14th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '2-13'},
                {dir:['e','east'],id:'1-14'},
                {dir:['w','west'],id:'3-14'},
                {dir:['n','north'],id:'2-15'}
            ],
        },
        //Rutherford Plaza
        {
            id:'ruth-17',
            name: 'Rutherford Plaza and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'ruth-16'},
                {dir:['e','east'],id:'2-17'},
                {dir:['w','west'],id:'3-17'},
            ],
        },
        {
            id:'ruth-16',
            name: 'Rutherford Plaza and 16th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'ruth-15'},
                {dir:['w','west'],id:'3-16'},
                {dir:['n','north'],id:'ruth-17'}
            ],
        },
        {
            id:'ruth-15',
            name: 'Rutherford Plaza and 15th Street',
            desc:``,
            exits:[
                {dir:['e','east'],id:'nath-17'},
                {dir:['w','west'],id:'3-15'},
                {dir:['n','north'],id:'ruth-16'}
            ],
        },
        //nathan d perlman Plaza
        {
            id:'nath-17',
            name: 'Nathan D Perlman Plaza and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'nath-16'},
                {dir:['e','east'],id:'1-17'},
                {dir:['w','west'],id:'2-17'},
            ],
        },
        {
            id:'nath-16',
            name: 'Nathan D Perlman Plaza and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'nath-15'},
                {dir:['e','east'],id:'1-16'},
                {dir:['n','north'],id:'ruth-17'}
            ],
        },
        {
            id:'nath-15',
            name: 'Nathan D Perlman Plaza and 15th Street',
            desc:``,
            exits:[
                {dir:['e','east'],id:'1-15'},
                {dir:['w','west'],id:'2-15'},
                {dir:['n','north'],id:'ruth-16'}
            ],
        },
        //Mt. Carmel Plaza
        {
            id:'car-28',
            name: 'Mt. Carmel Plaza and 28th Street',
            desc:``,
        },
        {
            id:'car-26',
            name: 'My. Carmel Plaza and 26th Street',
            desc:``,
        },
        //1st Ave
        {
            id:'1-34',
            name: '1st Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-33'},
                {dir:['e','east'],id:'fdr-34'},
                {dir:['w','west'],id:'2-34'},
                {dir:['n','north'],id:'1-35'}
            ],
        },
        {
            id:'1-33',
            name: '1st Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-32'},
                {dir:['w','west'],id:'1-33'},
                {dir:['n','north'],id:'1-34'}
            ],
        },
        {
            id:'1-30',
            name: '1st Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-29'},
                {dir:['w','west'],id:'2-30'},
                {dir:['n','north'],id:'1-33'}
            ],
        },
        {
            id:'1-29',
            name: '1st Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-28'},
                {dir:['w','west'],id:'2-29'},
                {dir:['n','north'],id:'1-30'}
            ],
        },
        {
            id:'1-28',
            name: '1st Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-27'},
                {dir:['w','west'],id:'2-28'},
                {dir:['n','north'],id:'1-29'}
            ],
        },
        {
            id:'1-27',
            name: '1st Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-26'},
                {dir:['w','west'],id:'2-27'},
                {dir:['n','north'],id:'1-28'}
            ],
        },
        {
            id:'1-26',
            name: '1st Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-25'},
                {dir:['w','west'],id:'car-26'},
                {dir:['n','north'],id:'1-27'}
            ],
        },
        {
            id:'1-25',
            name: '1st Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-24'},
                {dir:['w','west'],id:'2-25'},
                {dir:['n','north'],id:'1-26'}
            ],
        },
        {
            id:'1-24',
            name: '1st Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-23'},
                {dir:['w','west'],id:'2-24'},
                {dir:['n','north'],id:'1-25'}
            ],
        },
        {
            id:'1-23',
            name: '1st Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-22'},
                {dir:['w','west'],id:'2-23'},
                {dir:['e','east'],id:'levy-23'},
                {dir:['n','north'],id:'1-24'}
            ],
        },
        {
            id:'1-22',
            name: '1st Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-21'},
                {dir:['w','west'],id:'2-22'},
                {dir:['e','east'],id:'pete-22'},
                {dir:['n','north'],id:'1-23'}
            ],
        },
        {
            id:'1-21',
            name: '1st Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-20'},
                {dir:['w','west'],id:'2-21'},
                {dir:['n','north'],id:'1-22'}
            ],
        },
        {
            id:'1-20',
            name: '1st Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-19'},
                {dir:['w','west'],id:'2-20'},
                {dir:['n','north'],id:'1-21'}
            ],
        },
        {
            id:'1-19',
            name: '1st Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-18'},
                {dir:['w','west'],id:'2-19'},
                {dir:['n','north'],id:'1-20'}
            ],
        },
        {
            id:'1-18',
            name: '1st Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-17'},
                {dir:['w','west'],id:'2-18'},
                {dir:['n','north'],id:'1-19'}
            ],
        },
        {
            id:'1-17',
            name: '1st Avenue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-16'},
                {dir:['w','west'],id:'nath-17'},
                {dir:['n','north'],id:'1-18'}
            ],
        },
        {
            id:'1-16',
            name: '1st Avenue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-15'},
                {dir:['w','west'],id:'nath-16'},
                {dir:['n','north'],id:'1-17'}
            ],
        },
        {
            id:'1-15',
            name: '1st Avenue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-14'},
                {dir:['w','west'],id:'nath-15'},
                {dir:['n','north'],id:'1-15'}
            ],
        },
        {
            id:'1-14',
            name: '1st Avenue and 14th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '1-13'},
                {dir:['w','west'],id:'2-14'},
                {dir:['n','north'],id:'1-15'}
            ],
        },
        //Misc streets East side of map
        {
            id:'fdr-34',
            name: 'FDR Drive and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'fdr-25'},
                {dir:['w','west'],id:'1-34'}
            ],
        },
        {
            id:'fdr-23',
            name: 'FDR Drive and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'fdr-pete'},
                {dir:['w','west'],id:'levy-23'},
                {dir:['n','north'],id:'fdr-25'}
            ],
        },
        {
            id:'fdr-25',
            name:'FDR Drive and 25th Street',
            desc:``,
            exits:[
                    {dir:['s','south'],id: 'fdr-23'},
                    {dir:['w','west'],id:'levy-25'},
                    {dir:['n','north'],id:'fdr-34'}
            ],
        },
        {
            id:'fdr-pete',
            name: 'FDR Drive and Peter Cooper Road',
            desc:``,
            exits:[
                {dir:['w','west'],id:'1-22'},
                {dir:['n','north'],id:'fdr-23'}
            ],
        },,
        {
            id:'levy-23',
            name: 'Asser Levy Plaza and 23rd Street',
            desc:``,
            exits:[
                {dir:['n','north'],id: 'levy-25'},
                {dir:['w','west'],id:'1-23'},
                {dir:['e','east'],id:'fdr-23'}
            ],
        },
        {
            id:'levy-25',
            name: 'Asser Levy Plaza and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'levy-23'},
                {dir:['w','west'],id:'1-25'},
                {dir:['e','east'],id:'fdr-25'}
            ],
        },
    ],

},
//unio-17-2: Union Square West
//unio-17-1 Union Square East
//gram-20-1 Gramercy West
//gram-20-2 Gramercy East
//6th Ave is Avenue of America---amer-34 
//need to check on car-28 and how that is going to connect
