const chelsea = {

    roomId: '34-12',//unique room identifier
    rooms: [
            
        //12th Ave
        {
            id:'34-12',
            name: '12th Avenue and 34th Street',
            desc:``,
            
            exits:[
                {dir:['s','south'],id: '33-12'},
                {dir:['e','east'],id:'34-11'},
                //leaves neighborhood
                {dir:['n','north'],id:'35-12'}
            ],
        },
        {
            id:'33-12',
            name: '12th Avenue and 33rd Street',
            desc:``,

            exits:[
                {dir:['s','south'], id: '30-12'},
                {dir:['e','east'],id:'33-11'}
            ],
        },
        {
            id:'30-12',
            name: '12th Avenue and 32nd Street',
            desc:``,

            exits:[
                {dir:['s','south'],id: '29-12'},
                {dir:['e','east'], id:'30-11'}
            ],
        },
        {
            id:'29-12',
            name: '12th Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-12'},
                {dir:['e','east'], id:'29-11' }
            ],
        },
        {
            id:'28-12',
            name: '12th Avenue and 30th Street',
            desc:``,

            exits:[
                {dir:['s','south'],id: '27-12'},
                {dir:['e','east'],id:'28-11'}
            ],
        },            
        {
            id:'27-12',
            name: '12th Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-12'},
                {dir:['e','east'],id:'27-11'}
            ],
        },
        {
            id:'26-12',
            name: '12th Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-12'},
                {dir:['e','east'],id:'26-11'}
            ],
        },
        {
            id:'25-12',
            name: '12th Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-12'},
                {dir:['e','east'],id:'25-11'}
            ],
        },
        {
            id:'24-12',
            name: '12th Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-11'},
                {dir:['e','east'],id:'24-11'}
            ],
        },
        //11th Ave.
        {
            id:'34-11',
            name: '11th Aveneue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-11'},
                {dir:['e','east'],id:'34-10'},
                {dir:['w','west'],id:'34-12'},
                //leaves neighborhood.
                {dir:['n','north'],id:'35-11'}
            ],
        },
        {
            id:'33-11',
            name: '11th Aveneue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-11'},
                {dir:['e','east'],id:'33-10'},
                {dir:['w','west'],id:'33-12'},
                {dir:['n','north'],id:'34-11'
                }
            ],
        },
        {
            id:'30-11',
            name: '11th Aveneue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-11'},
                {dir:['e','east'],id:'30-10'},
                {dir:['w','west'],id:'30-12'},
                {dir:['n','north'],id:'33-11'}
            ],
        },
        {
            id:'29-11',
            name: '11th Aveneue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-11'},
                {dir:['e','east'],id:'29-10'},
                {dir:['w','west'],id:'29-12'},
                {dir:['n','north'],id:'30-11'}
            ],
        },
        {
            id:'28-11',
            name: '11th Aveneue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-11'},
                {dir:['e','east'],id:'28-10'},
                {dir:['w','west'],id:'28-12'},
                {dir:['n','north'],id:'29-11'}
            ],
        },
        {
            id:'27-11',
            name: '11th Aveneue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-11'},
                {dir:['e','east'],id:'27-10'},
                {dir:['w','west'],id:'27-12'},
                {dir:['n','north'],id:'28-11'}
            ],
        },
        {
            id:'26-11',
            name: '11th Aveneue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-11'},
                {dir:['e','east'],id:'26-10'},
                {dir:['w','west'],id:'26-12'},
                {dir:['n','north'],id:'27-11'}
            ],
        },
        {
            id:'25-11',
            name: '11th Aveneue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-11'},
                {dir:['e','east'],id:'25-10'},
                {dir:['w','west'],id:'25-12'},
                {dir:['n','north'],id:'26-11'}
            ],
        },
        {
            id:'24-11',
            name: '11th Aveneue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-11'},
                {dir:['e','east'],id:'24-10'},
                {dir:['w','west'],id:'24-12'},
                {dir:['n','north'],id:'25-11'}
            ],
        },        
        {
            id:'23-11',
            name: '11th Aveneue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-11'},
                {dir:['e','east'],id:'23-10'},
                {dir:['n','north'],id:'24-11'}
            ],
        },        
        {
            id:'22-11',
            name: '11th Aveneue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-11'},
                {dir:['e','east'],id:'22-10'},
                {dir:['n','north'],id:'23-11'}
            ],
        },        
        {
            id:'21-11',
            name: '11th Aveneue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-11'},
                {dir:['e','east'],id:'21-10'},
                {dir:['n','north'],id:'22-11'}
            ],
        },        
        {
            id:'20-11',
            name: '11th Aveneue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-11'},
                {dir:['e','east'],id:'20-10'},
                {dir:['n','north'],id:'21-11'}
            ],
        },        
        {
            id:'19-11',
            name: '11th Aveneue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-11'},
                {dir:['e','east'],id:'19-10'},
                {dir:['n','north'],id:'20-11'}
            ],
        },        
        {
            id:'18-11',
            name: '11th Aveneue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-11'},
                {dir:['e','east'],id:'18-10'},
                {dir:['n','north'],id:'19-11'}
            ],
        },        
        {
            id:'17-11',
            name: '11th Aveneue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-11'},
                {dir:['e','east'],id:'17-10'},
                { dir:['n','north'],id:'18-11'}
            ],
        },        
        {
            id:'16-11',
            name: '11th Aveneue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-11'},
                { dir:['e','east'],id:'16-10'},
                {dir:['n','north'],id:'17-11'}
            ],
        },        
        {
            id:'15-11',
            name: '11th Aveneue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-11'},
                {dir:['e','east'],id:'15-10'},
                {dir:['n','north'],id:'16-11'}
            ],
        },        
        {
            id:'14-11',
            name: '11th Aveneue and 14th Street',
            desc:``,         
            exits:[
                {dir:['s','south'],id: '13-11'},
                {dir:['e','east'],id:'14-10'},
                {dir:['n','north'],id:'15-11'}
            ],
        },
        //10th Ave
        {
            id:'34-10',
            name: '10th Aveneue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-10'},
                {dir:['e','east'],id:'34-9'},
                {dir:['w','west'],id:'34-11'},
                {dir:['n','north'],id:'35-10'}
            ],
        },
        {
            id:'33-10',
            name: '10th Aveneue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '31-10'},
                {dir:['e','east'],id:'33-9'},
                {dir:['w','west'],id:'33-11'},
                {dir:['n','north'],id:'34-10'}
            ],
        },
        {
            id:'31-10',
            name: '10th Aveneue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-10'},
                {dir:['e','east'],id:'31-9'},
                {dir:['n','north'],id:'33-10'}
            ],
        },
        {
            id:'30-10',
            name: '10th Aveneue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-10'},
                {dir:['e','east'],id:'30-9'},
                {dir:['w','west'],id:'30-11'},
                {dir:['n','north'],id:'31-10'}
            ],
        },
        {
            id:'29-10',
            name: '10th Aveneue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-10'},
                {dir:['e','east'],id:'29-9'},
                {dir:['w','west'],id:'29-11'},
                {dir:['n','north'],id:'30-8'}
            ],
        },
        {
            id:'28-10',
            name: '10th Aveneue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-10'},
                {dir:['e','east'],id:'28-9'},
                {dir:['w','west'],id:'28-11'},
                {dir:['n','north'],id:'29-10'}
            ],
        },
        {
            id:'27-10',
            name: '10th Aveneue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-10'},
                {dir:['e','east'],id:'27-26'},
                {dir:['w','west'],id:'27-11'},
                {dir:['n','north'],id:'28-10'}
            ],
        },
        {
            id:'26-10',
            name: '10th Aveneue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-10'},
                {dir:['e','east'],id:'26-27'},
                {dir:['w','west'],id:'26-11'},
                {dir:['n','north'],id:'27-10'}
            ],
        },
        {
            id:'25-10',
            name: '10th Aveneue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-10'},
                {dir:['e','east'],id:'25-9'},
                {dir:['w','west'],id:'25-11'},
                {dir:['n','north'],id:'26-10'}
            ],
        },
        {
            id:'24-10',
            name: '10th Aveneue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-10'},
                {dir:['e','east'],id:'24-9'},
                {dir:['w','west'],id:'24-11'},
                {dir:['n','north'],id:'25-10'}
            ],
        },
        {
            id:'23-10',
            name: '10th Aveneue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-10'},
                {dir:['e','east'],id:'23-9'},
                {dir:['w','west'],id:'23-11'},
                {dir:['n','north'],id:'24-10'}
            ],
        },
        {
            id:'22-10',
            name: '10th Aveneue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-10'},
                {dir:['e','east'],id:'22-9'},
                {dir:['w','west'],id:'22-11'},
                {dir:['n','north'],id:'23-10'}
            ],
        },
        {
            id:'21-10',
            name: '10th Aveneue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-10'},
                {dir:['e','east'],id:'21-9'},
                {dir:['w','west'],id:'21-11'},
                {dir:['n','north'],id:'22-10'}
            ],
        },
        {
            id:'20-10',
            name: '10th Aveneue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-10'},
                {dir:['e','east'],id:'20-9'},
                {dir:['w','west'],id:'20-11'},
                {dir:['n','north'],id:'21-10'}
            ],
        },
        {
            id:'19-10',
            name: '10th Aveneue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-10'},
                {dir:['e','east'],id:'19-9'},
                {dir:['w','west'],id:'19-11'},
                {dir:['n','north'],id:'20-10'}
            ],
        },
        {
            id:'18-10',
            name: '10th Aveneue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-10'},
                {dir:['e','east'],id:'18-9'},
                {dir:['w','west'],id:'18-11'},
                {dir:['n','north'],id:'19-10'}
            ],
        },
        {
            id:'17-10',
            name: '10th Aveneue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-10'},
                {dir:['e','east'],id:'17-9'},
                {dir:['w','west'],id:'17-11'},
                {dir:['n','north'],id:'18-10'}
            ],
        },
        {
            id:'16-10',
            name: '10th Aveneue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-10'},
                {dir:['e','east'],id:'16-9'},
                {dir:['w','west'],id:'16-11'},
                {dir:['n','north'],id:'17-10'}
            ],
        },
        {
            id:'15-10',
            name: '10th Aveneue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id:'14-10'},
                {dir:['e','east'],id:'15-9'},
                {dir:['w','west'],id:'15-11'},
                {dir:['n','north'],id:'16-10'}
            ],
        },
        {
            id:'14-10',
            name: '10th Aveneue and 14th Street',
            desc:``,
            exits:[
                //leaves neighborhood
                {dir:['s','south'],id: '13-10'},
                {dir:['e','east'],id:'14-9'},
                {dir:['w','west'],id:'14-11'},
                {dir:['n','north'],id:'15-10'}
            ],
        },
        //9th Ave
        {
            id:'27-26',
            name: '27th Street and 26th Street',
            desc:``,
            exits:[
                {dir:['n','north'],id:'27-10'},
                {dir:['w','west'],id:'26-10'},
                {dir:['e','east'],id:'26-9'}
            ]
        },
        {
            id:'34-9',
            name: '9th Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-9'},
                {dir:['e','east'],id:'34-8'},
                {dir:['w','west'],id:'34-10'},
                //leaves neighborhood
                {dir:['n','north'],id:'35-9'}
            ],
        },
        {
            id:'33-9',
            name: '9th Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '31-9'},
                {dir:['e','east'],id:'33-8'},
                {dir:['w','west'],id:'33-10'},
                {dir:['n','north'],id:'34-9'}
            ],
        },

        {
            id:'31-9',
            name: '9th Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-9'},
                {dir:['e','east'],id:'31-8'},
                {dir:['w','west'],id:'31-10'},
                {dir:['n','north'],id:'33-9'}
            ],
        },

        {
            id:'30-9',
            name: '9th Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-9'},
                {dir:['e','east'],id:'30-8'},
                {dir:['w','west'],id:'30-10'},
                {dir:['n','north'],id:'31-9'}
            ],
        },
        {
            id:'29-9',
            name: '9th Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-9'},
                {dir:['e','east'],id:'29-8'},
                {dir:['w','west'],id:'29-10'},
                {dir:['n','north'],id:'30-9'}
            ],
        },

        {
            id:'28-9',
            name: '9th Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-9'},
                {dir:['e','east'],id:'28-8'},
                {dir:['w','west'],id:'28-10'},
                {dir:['n','north'],id:'29-9'}
            ],
        },
        {
            id:'26-9',
            name: '9th Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-9'},
                {dir:['e','east'],id:'26-8'},
                {dir:['w','west'],id:'26-10'},
                {dir:['n','north'],id:'27-26'}
            ],
        },

        {
            id:'25-9',
            name: '9th Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-9'},
                {dir:['e','east'],id:'25-8'},
                {dir:['w','west'],id:'25-10'},
                {dir:['n','north'],id:'26-9'}
            ],
        },

        {
            id:'24-9',
            name: '9th Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-9'},
                {dir:['e','east'],id:'24-8'},
                {dir:['w','west'],id:'24-10'},
                {dir:['n','north'],id:'25-9'}
            ],
        },

        {
            id:'23-9',
            name: '9th Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-9'},
                {dir:['e','east'],id:'23-8'},
                {dir:['w','west'],id:'23-10'},
                {dir:['n','north'],id:'24-9'}
            ],
        },

        {
            id:'22-9',
            name: '9th Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-9'},
                {dir:['e','east'],id:'22-8'},
                {dir:['w','west'],id:'22-10'},
                {dir:['n','north'],id:'23-9'}
            ],
        },

        {
            id:'21-9',
            name: '9th Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-9'},
                {dir:['e','east'],id:'21-8'},
                {dir:['w','west'],id:'21-10'},
                {dir:['n','north'],id:'22-9'}
            ],
            
        },
        {
            id:'20-9',
            name: '9th Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-9'},
                {dir:['e','east'],id:'20-8'},
                {dir:['w','west'],id:'20-10'},
                {dir:['n','north'],id:'21-9'}
            ],
        },

        {
            id:'19-9',
            name: '9th Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-9'},
                {dir:['e','east'],id:'19-8'},
                {dir:['w','west'],id:'19-10'},
                {dir:['n','north'],id:'20-9'}
            ],
        },

        {
            id:'18-9',
            name: '9th Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-9'},
                {dir:['e','east'],id:'18-8'},
                {dir:['w','west'],id:'18-10'},
                {dir:['n','north'],id:'19-9'}
            ],
        },
        {
            id:'17-9',
            name: '9th Avenue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-9'},
                {dir:['e','east'],id:'17-8'},
                {dir:['w','west'],id:'17-10'},
                {dir:['n','north'],id:'18-9'}
            ],
        },
        {
            id:'16-9',
            name: '9th Avenue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-9'},
                {dir:['e','east'],id:'16-8'
                },
                {dir:['w','west'],id:'16-10'},
                {dir:['n','north'],id:'17-9'}
            ],
        },
        {
            id:'15-9',
            name: '9th Avenue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-9'},
                {dir:['e','east'],id:'15-8'},
                {dir:['w','west'],id:'15-10'},
                {dir:['n','north'],id:'16-9'}
            ],
        },
        {
            id:'14-9',
            name: '9th Avenue and 14th Street',
            desc:``,
            exits:[
                //leaves nighborhood
                {dir:['s','south'],id: '13-9'},
                {dir:['e','east'],id:'14-8'},
                {dir:['w','west'],id:'14-10'},
                {dir:['n','north'],id:'15-9'}
            ],
        },
        //8th Ave
        {
            id:'34-8',
            name: '8th Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-8'},
                {dir:['e','east'],id:'34-7'},
                {dir:['w','west'],id:'34-9'},
                //exits neighborhood
                {dir:['n','north'],id:'35'}
            ],
        },
        {
            id:'33-8',
            name: '8th Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['e','east'],id:'33-7'},
                {dir:['w','west'],id:'33-9'},
                {dir:['n','north'],id:'34-8'}
            ],
        },
        {
            id:'31-8',
            name: '8th Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-8'},
                {dir:['e','east'],id:'31-7'},
                {dir:['w','west'],id:'31-9'},
                {dir:['n','north'],id:'33-8'}
            ],
        },
        {
            id:'30-8',
            name: '8th Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-8'},
                {dir:['e','east'],id:'30-7'},
                {dir:['w','west'],id:'30-9'},
                {dir:['n','north'],id:'31-8'}
            ],
        },
        {
            id:'29-8',
            name: '8th Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-8'},
                {dir:['e','east'],id:'29-7'},
                {dir:['w','west'],id:'29-9'},
                {dir:['n','north'],id:'30-8'}
            ],
        },
        {
            id:'28-8',
            name: '8th Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-8'},
                {dir:['e','east'],id:'28-7'},
                {dir:['w','west'],id:'28-9'},
                {dir:['n','north'],id:'29-8'}
            ],
        },
        {
            id:'27-8',
            name: '8th Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-8'},
                {dir:['e','east'],id:'27-7'},
                {dir:['w','west'],id:'27-9'},
                {dir:['n','north'],id:'28-8'}
            ],
        },
        {
            id:'26-8',
            name: '8th Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-8'},
                {dir:['e','east'],id:'26-7'},
                {dir:['w','west'],id:'26-9'},
                {dir:['n','north'],id:'27-8'}
            ],
        },
        {
            id:'25-8',
            name: '8th Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-8'},
                {dir:['e','east'],id:'24-7'},
                {dir:['w','west'],id:'24-9'},
                {dir:['n','north'],id:'26-8'}
            ],
        },
        {
            id:'24-8',
            name: '8th Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-8'},
                {dir:['e','east'],id:'24-7'},
                {dir:['w','west'],id:'24-9'},
                {dir:['n','north'],id:'25-8'}
            ],
        },
        {
            id:'23-8',
            name: '8th Avenue and 23th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-8'},
                {dir:['e','east'],id:'23-7'},
                {dir:['w','west'],id:'23-9'},
                {dir:['n','north'],id:'24-8'}
            ],
        },
        {
            id:'22-8',
            name: '8th Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-8'},
                {dir:['e','east'],id:'22-7'},
                {dir:['w','west'],id:'22-9'},
                {dir:['n','north'],id:'23-8'}
            ],
        },
        {
            id:'21-8',
            name: '8th Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-8'},
                {dir:['e','east'],id:'21-7'},
                {dir:['w','west'],id:'21-9'},
                {dir:['n','north'],id:'22-8'}
            ],
        },
        {
            id:'20-8',
            name: '8th Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-8'},
                {dir:['e','east'],id:'20-7'},
                {dir:['w','west'],id:'20-9'},
                {dir:['n','north'],id:'21-8'}
            ],
        },
        {
            id:'19-8',
            name: '8th Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-8'},
                {dir:['e','east'],id:'19-7'},
                {dir:['w','west'],id:'19-9'},
                {dir:['n','north'],id:'20-8'}
            ],
        },
        {
            id:'18-8',
            name: '8th Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-8'},
                {dir:['e','east'],id:'16-7'},
                {dir:['w','west'],id:'16-9'},
                {dir:['n','north'],id:'17-8'}
            ],
        },
        {
            id:'17-8',
            name: '8th Avenue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-8'},
                {dir:['e','east'],id:'17-7'},
                {dir:['w','west'],id:'17-9'},
                {dir:['n','north'],id:'18-8'}
            ],
        },
        {
            id:'16-8',
            name: '8th Avenue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-8'},
                {dir:['e','east'],id:'16-7'},
                {dir:['w','west'],id:'16-9'},
                {dir:['n','north'],id:'17-8'}
            ],
        },
        {
            id:'15-8',
            name: '8th Avenue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-8'},
                {dir:['e','east'],id:'15-7'},
                {dir:['w','west'],id:'15-9'},
                {dir:['n','north'],id:'16-8'}
            ],
        },
        {
            id:'14-8',
            name: '8th Avenue and 14th Street',
            desc:`Chelsea`,
            exits:[
                //exits neighborhood
                {dir:['s','south'],id: '13'},
                {dir:['e','east'],id:'14-7'},
                {dir:['w','west'],id:'14-9'},
                {dir:['n','north'],id:'15-8'}
            ],
        },
        //7th Ave
        {
            id:'34-7',
            name: '7th Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-7'},
                {dir:['e','east'],id:'34-amer'},
                {dir:['w','west'],id:'34-8'},
                //exits neighborhood
                {dir:['n','north'],id:'35'}
            ],
        },
        {
            id:'33-7',
            name: '7th Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '32-7'},
                {dir:['e','east'],id:'33-amer'},
                {dir:['w','west'],id:'33-8'},
                {dir:['n','north'],id:'34-7'}
            ],
        },
        {
            id:'32-7',
            name: '7th Avenue and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '31-7'},
                {dir:['e','east'],id:'32-amer'},
                {dir:['n','north'],id:'33-7'}
            ],
        },
        {
            id:'31-7',
            name: '7th Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-7'},
                {dir:['e','east'],id:'31-amer'},
                {dir:['w','west'],id:'31-8'},
                {dir:['n','north'],id:'32-7'}
            ],
        },
        {
            id:'30-7',
            name: '7th Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-7'},
                {dir:['e','east'],id:'30-amer'},
                {dir:['w','west'],id:'30-8'},
                {dir:['n','north'],id:'31-7'}
            ],
        },
        {
            id:'29-7',
            name: '7th Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-7'},
                {dir:['e','east'],id:'29-amer'},
                {dir:['w','west'],id:'29-8'},
                {dir:['n','north'],id:'30-7'}
            ],
        },
        {
            id:'28-7',
            name: '7th Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-7'},
                {dir:['e','east'],id:'28-amer'},
                {dir:['w','west'],id:'28-8'},
                {dir:['n','north'],id:'29-7'}
            ],
        },
        {
            id:'27-7',
            name: '7th Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-7'},
                {dir:['e','east'],id:'27-amer'},
                {dir:['w','west'],id:'27-8'},
                {dir:['n','north'],id:'28-7'}
            ],
        },
        {
            id:'26-7',
            name: '7th Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-7'},
                {dir:['e','east'],id:'26-amer'},
                {dir:['w','west'],id:'26-8'},
                {dir:['n','north'],id:'27-7'}
            ],
        },
        {
            id:'25-7',
            name: '7th Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-7'},
                {dir:['e','east'],id:'25-amer'},
                {dir:['w','west'],id:'25-8'},
                {dir:['n','north'],id:'26-7'}
            ],
        },
        {
            id:'24-7',
            name: '7th Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-7'},
                {dir:['e','east'],id:'24-amer'},
                {dir:['w','west'],id:'24-8'},
                {dir:['n','north'],id:'25-7'}
            ],
        },
        {
            id:'23-7',
            name: '7th Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-7'},
                {dir:['e','east'],id:'23-amer'},
                {dir:['w','west'],id:'23-8'},
                {dir:['n','north'],id:'24-7'}
            ],
        },
        {
            id:'22-7',
            name: '7th Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-7'},
                {dir:['e','east'],id:'22-amer'},
                {dir:['w','west'],id:'22-8'},
                {dir:['n','north'],id:'23-7'}
            ],
        },
        {
            id:'21-7',
            name: '7th Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-7'},
                {dir:['e','east'],id:'21-amer'},
                {dir:['w','west'],id:'21-8'},
                {dir:['n','north'],id:'21-7'}
            ],
        },
        {
            id:'20-7',
            name: '7th Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-7'},
                {dir:['e','east'],id:'20-amer'},
                {dir:['w','west'],id:'20-8'},
                {dir:['n','north'],id:'21-7'}
            ],
        },
        {
            id:'19-7',
            name: '7th Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-7'},
                {dir:['e','east'],id:'19-amer'},
                {dir:['w','west'],id:'19-8'},
                {dir:['n','north'],id:'20-7'}
            ],
        },
        {
            id:'18-7',
            name: '7th Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-7'},
                {dir:['e','east'],id:'18-amer'},
                {dir:['w','west'],id:'18-8'},
                {dir:['n','north'],id:'19-7'}
            ],
        },
        {
            id:'17-7',
            name: '7th Avenue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-7'},
                {dir:['e','east'],id:'17-amer'},
                {dir:['w','west'],id:'17-8'},
                {dir:['n','north'],id:'18-7'}
            ],
        },
        {
            id:'16-7',
            name: '7th Avenue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-7'},
                {dir:['e','east'],id:'16-amer'},
                {dir:['w','west'],id:'16-8'},
                {dir:['n','north'],id:'17-7'}
            ],
        },
        {
            id:'15-7',
            name: '7th Avenue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-7'},
                {dir:['e','east'],id:'14-amer'},
                {dir:['w','west'],id:'14-8'},
                {dir:['n','north'],id:'15-7'}
            ],
        },
        {
            id:'14-7',
            name: '7th Avenue and 14th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '13'},
                {dir:['e','east'],id:'14-amer'},
                {dir:['w','west'],id:'14-8'},
                {dir:['n','north'],id:'15-7'}
            ],
        },
        //6th Ave/Avenue of America
        {
            id:'34-amer',
            name: 'Avenue of America and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-amer'},
                {dir:['e','east'],id:'broa-6'},
                {dir:['w','west'],id:'33-7'},
                {dir:['n','north'],id:'35'}
            ],
        },
        {
            id:'33-amer',
            name: 'Avenue of America and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '32-amer'},
                {dir:['e','east'],id:'33-broa'},
                {dir:['w','west'],id:'33-7'},
                {dir:['n','north'],id:'34-amer'}
            ],
        },
        {
            id:'32-amer',
            name: 'Avenue of America and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '31-amer'},
                {dir:['e','east'],id:'32-broa'},
                {dir:['w','west'],id:'32-7'},
                {dir:['n','north'],id:'33-amer'}
            ],
        },
        {
            id:'31-amer',
            name: 'Avenue of America and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-amer'},
                {dir:['e','east'],id:'31-broa'},
                {dir:['w','west'],id:'31-7'},
                {dir:['n','north'],id:'32-amer'}
            ],
        },
        {
            id:'30-amer',
            name: 'Avenue of America and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-amer'},
                {dir:['e','east'],id:'30-broa'},
                {dir:['w','west'],id:'30-7'},
                {dir:['n','north'],id:'31-amer'}
            ],
        },
        {
            id:'29-amer',
            name: 'Avenue of America and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-amer'},
                {dir:['e','east'],id:'29-broa'},
                {dir:['w','west'],id:'29-7'},
                {dir:['n','north'],id:'30-amer'}
            ],
        },
        {
            id:'28-amer',
            name: 'Avenue of America and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-amer'},
                {dir:['e','east'],id:'28-broa'},
                {dir:['w','west'],id:'28-7'},
                {dir:['n','north'],id:'29-amer'}
            ],
        },
        {
            id:'27-amer',
            name: 'Avenue of America and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-amer'},
                {dir:['e','east'],id:'27-broa'},
                {dir:['w','west'],id:'27-7'},
                {dir:['n','north'],id:'28-amer'}
            ],
        },
        {
            id:'26-amer',
            name: 'Avenue of America and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-amer'},
                {dir:['e','east'],id:'26-broa'},
                {dir:['w','west'],id:'26-7'},
                {dir:['n','north'],id:'27-amer'}
            ],
        },
        {
            id:'25-amer',
            name: 'Avenue of America and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-amer'},
                {dir:['e','east'],id:'25-broa'},
                {dir:['w','west'],id:'25-7'},
                {dir:['n','north'],id:'26-amer'}
            ],
        },
        {
            id:'24-amer',
            name: 'Avenue of America and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-amer'},
                {dir:['e','east'],id:'24-5'},
                {dir:['w','west'],id:'24-7'},
                {dir:['n','north'],id:'25-amer'}
            ],
        },
        {
            id:'23-amer',
            name: 'Avenue of America and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-amer'},
                {dir:['e','east'],id:'23-5'},
                {dir:['w','west'],id:'23-7'},
                {dir:['n','north'],id:'24-amer'}
            ],
        },
        {
            id:'22-amer',
            name: 'Avenue of America and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-amer'},
                {dir:['e','east'],id:'22-5'},
                {dir:['w','west'],id:'22-7'},
                {dir:['n','north'],id:'23-amer'}
            ],
        },
        {
            id:'21-amer',
            name: 'Avenue of America and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-amer'},
                {dir:['e','east'],id:'21-5'},
                {dir:['w','west'],id:'21-7'},
                {dir:['n','north'],id:'22-amer'}
            ],
            
        },
        {
            id:'20-amer',
            name: 'Avenue of America and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-amer'},
                {dir:['e','east'],id:'20-5'},
                {dir:['w','west'],id:'20-7'},
                {dir:['n','north'],id:'21-amer'
                }
            ],
        },
        {
            id:'19-amer',
            name: 'Avenue of America and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-amer'},
                {dir:['e','east'],id:'19-5'},
                {dir:['w','west'],id:'19-7'},
                {dir:['n','north'],id:'20-amer'}
            ],
        },
        {
            id:'18-amer',
            name: 'Avenue of America and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-amer'},
                {dir:['e','east'],id:'18-5'},
                {dir:['w','west'],id:'18-7'},
                {dir:['n','north'],id:'19-amer'}
            ],
        },
        {
            id:'17-amer',
            name: 'Avenue of America and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-amer'},
                {dir:['e','east'],id:'17-5'},
                {dir:['w','west'],id:'17-7'},
                {dir:['n','north'],id:'18-amer'}
            ],
        },
        {
            id:'16-amer',
            name: 'Avenue of America and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-amer'},
                {dir:['e','east'],id:'16-5'},
                {dir:['w','west'],id:'16-7'},
                {dir:['n','north'],id:'17-amer'}
            ],
        },
        {
            id:'15-amer',
            name: 'Avenue of America and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-amer'},
                {dir:['e','east'],id:'15-5'},
                {dir:['w','west'],id:'15-7'},
                {dir:['n','north'],id:'16-amer'}
            ],
        },
        {
            id:'14-amer',
            name: 'Avenue of America and 14th Street',
            desc:``,
            exits:[
                //exits neighborhood
                {dir:['s','south'],id: '13'},
                {dir:['e','east'],id:'14-5'},
                {dir:['w','west'],id:'14-7'},
                {dir:['n','north'],id:'15-amer'}
            ],
        },
        //Broadway
        {
            id:'amer-broa',
            name: 'Avenue of America and Broadway',
            desc:``,
            exits:[
                {dir:['south'],id:'33-broa'},
                {dir:['w','west'],id:'34-amer'}
            ],
        },
        {
            id:'33-broa',
            name: 'Broadway and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '32-broa'},
                {dir:['e','east'],id:'33-5'},
                {dir:['w','west'],id:'33-amer'},
                {dir:['n','north'],id:'amer-broa'}
            ],
        },
        {
            id:'32-broa',
            name: 'Broadway and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '31-broa'},
                {dir:['e','east'],id:'32-5'},
                {dir:['w','west'],id:'32-amer'},
                {dir:['n','north'],id:'33-broa'}
            ],
        },
        {
            id:'31-broa',
            name: 'Broadway and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-broa'},
                {dir:['e','east'],id:'31-5'},
                {dir:['w','west'],id:'31-amer'},
                {dir:['n','north'],id:'32-broa'}
            ],
        },
        {
            id:'30-broa',
            name: 'Broadway and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-broa'},
                {dir:['e','east'],id:'30-5'},
                {dir:['w','west'],id:'30-amer'},
                {dir:['n','north'],id:'31-broa'}
            ],
        },
        {
            id:'29-broa',
            name: 'Broadway and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-broa'},
                {dir:['e','east'],id:'29-5'},
                {dir:['w','west'],id:'29-amer'},
                {dir:['n','north'],id:'30-broa'}
            ],
        },
        {
            id:'28-broa',
            name: 'Broadway and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-broa'},
                {dir:['e','east'],id:'28-5'},
                {dir:['w','west'],id:'28-amer'},
                {dir:['n','north'],id:'29-broa'
                }
            ],
        },
        {
            id:'27-broa',
            name: 'Broadway and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-broa'},
                {dir:['e','east'],id:'27-5'},
                {dir:['w','west'],id:'27-amer'},
                {dir:['n','north'],id:'28-broa'}
            ],
        },
        {
            id:'26-broa',
            name: 'Broadway and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-broa'},
                {dir:['e','east'],id:'26-5'},
                {dir:['w','west'],id:'26-amer'},
                {dir:['n','north'],id:'27-broa'}
            ],
        },
        {
            id:'25-broa',
            name: 'Broadway and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '5'},
                {dir:['e','east'],id:'25-5'},
                {dir:['w','west'],id:'25-amer'},
                {dir:['n','north'],id:'26-broa'}
            ],
        },
        {
            id:'broa-5',
            name: 'Broadway and 5th Avenue',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-5'},
                {dir:['e','east'],id:'23-broa'},
                {dir:['w','west'],id:'25-broa'},
                {dir:['n','north'],id:'25-5'}
            ],
        },
        {
            id:'23-broa',
            name: 'Broadway and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-broa'},
                {dir:['e','east'],id:'23-madi'},
                {dir:['w','west'],id:'23-5'},
                {dir:['n','north'],id:'24-5'}
            ],
        },
        {
            id:'22-broa',
            name: 'Broadway and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-broa'},
                {dir:['e','east'],id:'22-park'},
                {dir:['w','west'],id:'22-5'},
                {dir:['n','north'],id:'23-broa'}
            ],
        },
        {
            id:'21-broa',
            name: 'Broadway and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-broa'},
                {dir:['e','east'],id:'21-park'},
                {dir:['w','west'],id:'21-5'},
                {dir:['n','north'],id:'22-broa'}
            ],
        },
        {
            id:'20-broa',
            name: 'Broadway and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-broa'},
                {dir:['e','east'],id:'20-park'},
                {dir:['w','west'],id:'20-5'},
                {dir:['n','north'],id:'21-broa'}
            ],
        },
        {
            id:'19-broa',
            name: 'Broadway and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-broa'},
                {dir:['e','east'],id:'19-park'},
                {dir:['w','west'],id:'19-5'},
                {dir:['n','north'],id:'20-broa'}
            ],
        },
        {
            id:'18-broa',
            name: 'Broadway and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-unio-1'},
                {dir:['e','east'],id:'18-park'},
                {dir:['w','west'],id:'18-5'},
                {dir:['n','north'],id:'19-broa'}
            ],
        },
        //5th Ave
        {
            id:'34-5',
            name: '5th Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-5'},
                {dir:['e','east'],id:'34-madi'},
                {dir:['w','west'],id:'amer-broa'},
                {dir:['n','north'],id:'35-5'}
            ],
        },
        {
            id:'33-5',
            name: '5th Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '32-5'},
                {dir:['e','east'],id:'33-madi'},
                {dir:['w','west'],id:'33-broa'},
                {dir:['n','north'],id:'34-5'}
            ],
        },
        {
            id:'32-5',
            name: '5th Avenue and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '31-5'},
                {dir:['e','east'],id:'32-madi'},
                {dir:['w','west'],id:'32-broa'},
                {dir:['n','north'],id:'33-5'}
            ],
        },
        {
            id:'31-5',
            name: '5th Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-5'},
                {dir:['e','east'],id:'31-madi'},
                {dir:['w','west'],id:'31-broa'},
                {dir:['n','north'],id:'32-5'}
            ],
        },
        {
            id:'30-5',
            name: '5th Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-5'},
                {dir:['e','east'],id:'30-madi'},
                {dir:['w','west'],id:'30-broa'},
                {dir:['n','north'],id:'31-5'}
            ],
        },
        {
            id:'29-5',
            name: '5th Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-5'},
                {dir:['e','east'],id:'29-madi'},
                {dir:['w','west'],id:'29-broa'},
                {dir:['n','north'],id:'30-5'}
            ],
        },
        {
            id:'28-5',
            name: '5th Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-5'},
                {dir:['e','east'],id:'28-madi'},
                {dir:['w','west'],id:'28-broa'},
                {dir:['n','north'],id:'29-5'}
            ],
        },
        {
            id:'27-5',
            name: '5th Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-5'},
                {dir:['e','east'],id:'27-madi'},
                {dir:['w','west'],id:'27-broa'},
                {dir:['n','north'],id:'28-5'}
            ],
        },
        {
            id:'26-5',
            name: '5th Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-5'},
                {dir:['e','east'],id:'26-madi'},
                {dir:['w','west'],id:'26-broa'},
                {dir:['n','north'],id:'27-5'}
            ],
        },
        {
            id:'25-5',
            name: '5th Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'broa-5'},
                {dir:['w','west'],id:'25-broa'},
                {dir:['n','north'],id:'26-5'}
            ],
        },
        {
            id:'24-5',
            name: '5th Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-5'},
                {dir:['e','east'],id:'24-amer'},
                {dir:['w','west'],id:'23-broa'},
                {dir:['n','north'],id:'broa-5'}
            ],
        },
        {
            id:'23-5',
            name: '5th Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-5'},
                {dir:['e','east'],id:'23-amer'},
                {dir:['w','west'],id:'23-broa'},
                {dir:['n','north'],id:'24-5'}
            ],
        },
        {
            id:'22-5',
            name: '5th Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-5'},
                {dir:['e','east'],id:'22-amer'},
                {dir:['w','west'],id:'22-broa'},
                {dir:['n','north'],id:'23-5'}
            ],
        },
        {
            id:'21-5',
            name: '5th Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-5'},
                {dir:['e','east'],id:'21-amer'},
                {dir:['w','west'],id:'21-broa'},
                {dir:['n','north'],id:'22-5'}
            ],
        },
        {
            id:'20-5',
            name: '5th Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-5'},
                {dir:['e','east'],id:'20-amer'},
                {dir:['w','west'],id:'20-broa'},
                {dir:['n','north'],id:'21-5'}
            ],
        },
        {
            id:'19-5',
            name: '5th Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-5'},
                {dir:['e','east'],id:'19-amer'},
                {dir:['w','west'],id:'19-broa'},
                {dir:['n','north'],id:'20-5'}
            ],
        },
        {
            id:'18-5',
            name: '5th Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-5'},
                {dir:['e','east'],id:'18-amer'},
                {dir:['w','west'],id:'18-broa'},
                {dir:['n','north'],id:'19-5'}
            ],
        },
        {
            id:'17-5',
            name: '5th Avenue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-5'},
                {dir:['e','east'],id:'17-amer'},
                {dir:['w','west'],id:'17-unio-1'},
                {dir:['n','north'],id:'18-5'}
            ],
        },
        {
            id:'16-5',
            name: '5th Avenue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-5'},
                {dir:['e','east'],id:'16-amer'},
                {dir:['w','west'],id:'16-unio-1'},
                {dir:['n','north'],id:'17-5'}
            ],
        },
        {
            id:'15-5',
            name: '5th Avenue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-5'},
                {dir:['e','east'],id:'15-amer'},
                {dir:['w','west'],id:'15-unio-1'},
                {dir:['n','north'],id:'16-5'}
            ],
        },
        {
            id:'14-5',
            name: '5th Avenue and 14th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '13-5'},
                {dir:['e','east'],id:'14-amer'},
                {dir:['w','west'],id:'14-unio-1'},
                {dir:['n','north'],id:'15-5'}
            ],
        },
        //Madison Ave
        {
            id:'34-madi',
            name: 'Madison Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-madi'},
                {dir:['e','east'],id:'34-5'},
                {dir:['w','west'],id:'34-park'},
                {dir:['n','north'],id:'35-madi'}
            ],
        },
        {
            id:'33-madi',
            name: 'Madison Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '32-madi'},
                {dir:['e','east'],id:'33-5'},
                {dir:['w','west'],id:'33-park'},
                {dir:['n','north'],id:'34-madi'}
            ],
        },
        {
            id:'32-madi',
            name: 'Madison Avenue and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '31-madi'},
                {dir:['e','east'],id:'32-5'},
                {dir:['w','west'],id:'32-park'},
                {dir:['n','north'],id:'33-madi'}
            ],
        },
        {
            id:'31-madi',
            name: 'Madison Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-madi'},
                {dir:['e','east'],id:'31-5'},
                {dir:['w','west'],id:'31-park'},
                {dir:['n','north'],id:'32-madi'}
            ],
        },
        {
            id:'30-madi',
            name: 'Madison Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-madi'},
                {dir:['e','east'],id:'30-5'},
                {dir:['w','west'],id:'30-park'},
                {dir:['n','north'],id:'31-madi'}
            ],
        },
        {
            id:'29-madi',
            name: 'Madison Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-madi'},
                {dir:['e','east'],id:'29-5'},
                {dir:['w','west'],id:'29-park'},
                {dir:['n','north'],id:'30-madi'}
            ],
        },
        {
            id:'28-madi',
            name: 'Madison Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-madi'},
                {dir:['e','east'],id:'28-5'},
                {dir:['w','west'],id:'28-park'},
                {dir:['n','north'],id:'29-madi'}
            ],
        },
        {
            id:'27-madi',
            name: 'Madison Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-madi'},
                {dir:['e','east'],id:'27-5'},
                {dir:['w','west'],id:'27-park'},
                {dir:['n','north'],id:'28-madi'}
            ],
        },
        {
            id:'26-madi',
            name: 'Madison Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-madi'},
                {dir:['e','east'],id:'26-5'},
                {dir:['w','west'],id:'26-park'},
                {dir:['n','north'],id:'27-madi'}
            ],
        },
        {
            id:'25-madi',
            name: 'Madison Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-madi'},
                {dir:['e','east'],id:'25-park'},
                {dir:['n','north'],id:'26-madi'}
            ],
        },
        {
            id:'24-madi',
            name: 'Madison Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-madi'},
                {dir:['e','east'],id:'24-park'},
                {dir:['n','north'],id:'23-madi'}
            ],
        },
        {
            id:'23-madi',
            name: 'Madison Avenue and 23th Street',
            desc:``,
            exits:[
                {dir:['e','west'],id:'23-broa'},
                {dir:['w','east'],id:'23-park'},
                {dir:['n','north'],id:'24-madi'}
            ],
        },
        //Union Square West and East
        {
            id:'17-unio-1',
            name: 'Union Sqaure West and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-unio-1'},
                {dir:['w','west'],id:'17-5'},
                {dir:['e','east'],id:'17-unio-2'},
                {dir:['n','north'],id:'18-broa'}
            ],
        },
        {
            id:'16-unio-1',
            name: 'Union Square West and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-unio-1'},
                {dir:['e','east'],id:'16-5'},
                {dir:['n','north'],id:'17-unio-1'}
            ],
        },
        {
            id:'15-unio-1',
            name: 'Union Square West and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-unio-1'},
                {dir:['e','east'],id:'15-5'},
                {dir:['n','north'],id:'16-unio-1'}
            ],
        },
        {
            id:'14-unio-1',
            name: 'Union Square West and 14th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'univ-13'},
                {dir:['w','west'],id:'14-unio-2'},
                {dir:['e','east'],id:'14-5'},
                {dir:['n','north'],id:'15-unio-1'}
            ],
        },
        {
            id:'17-unio-2',
            name: 'Union Square East and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-unio-2'},
                {dir:['w','west'],id:'17-unio-1'},
                {dir:['e','east'],id:'17-irvi'},
                {dir:['n','north'],id:'18-park'}
            ],
        },
        {
            id:'16-unio-2',
            name: 'Union Square East and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-unio-2'},
                {dir:['e','east'],id:'16-irvi'},
                {dir:['n','north'],id:'17-unio-2'}
            ],
        },
        {
            id:'15-unio-2',
            name: 'Union Sqaure East and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-unio-2'},
                {dir:['e','east'],id:'15-irvi'},
                {dir:['n','north'],id:'16-unio-2'}
            ],
        },
        {
            id:'14-unio-2',
            name: 'Union Square East and 14th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: ''},
                {dir:['w','west'],id:'14-unio-2'},
                {dir:['e','east'],id:'14-irvi'},
                {dir:['n','north'],id:'15-unio-2'}
            ],
        },
        //triangular exit from the district 4th Ave and 14th.
        //Park Ave
        {
            id:'34-park',
            name: 'Park Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-park'},
                {dir:['w','west'],id:'34-madi'},
                {dir:['e','east'],id:'34-lexi'},
                {dir:['n','north'],id:'35-park'}
            ],
        },
        {
            id:'33-park',
            name: 'Park Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '32-park'},
                {dir:['w','west'],id:'33-madi'},
                {dir:['e','east'],id:'33-lexi'},
                {dir:['n','north'],id:'34-park'}
            ],
        },
        {
            id:'32-park',
            name: 'Park Avenue and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '31-park'},
                {dir:['w','west'],id:'32-madi'},
                {dir:['e','east'],id:'32-lexi'},
                {dir:['n','north'],id:'33-park'}
            ],
        },
        {
            id:'31-park',
            name: 'Park Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-park'},
                {dir:['w','west'],id:'31-madi'},
                {dir:['e','east'],id:'31-lexi'},
                {dir:['n','north'],id:'32-park'}
            ],
        },
        {
            id:'30-park',
            name: 'Park Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-park'},
                {dir:['w','west'],id:'30-madi'},
                {dir:['e','east'],id:'30-lexi'},
                {dir:['n','north'],id:'31-park'}
            ],
        },
        {
            id:'29-park',
            name: 'Park Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-park'},
                {dir:['w','west'],id:'29-madi'},
                {dir:['e','east'],id:'29-lexi'},
                {dir:['n','north'],id:'30-park'}
            ],
        },
        {
            id:'28-park',
            name: 'Park Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-park'},
                {dir:['w','west'],id:'28-madi'},
                {dir:['e','east'],id:'28-lexi'},
                {dir:['n','north'],id:'29-park'}
            ],
        },
        {
            id:'27-park',
            name: 'Park Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-park'},
                {dir:['w','west'],id:'27-madi'},
                {dir:['e','east'],id:'27-lexi'},
                {dir:['n','north'],id:'28-park'}
            ],
        },
        {
            id:'26-park',
            name: 'Park Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-park'},
                {dir:['w','west'],id:'26-madi'},
                {dir:['e','east'],id:'26-lexi'},
                {dir:['n','north'],id:'27-park'}
            ],
        },
        {
            id:'25-park',
            name: 'Park Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-park'},
                {dir:['w','west'],id:'25-madi'},
                {dir:['e','east'],id:'25-lexi'},
                {dir:['n','north'],id:'26-park'}
            ],
        },
        {
            id:'24-park',
            name: 'Park Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-park'},
                {dir:['w','west'],id:'24-madi'},
                {dir:['e','east'],id:'24-lexi'},
                {dir:['n','north'],id:'25-park'}
            ],
        },
        {
            id:'23-park',
            name: 'Park Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-park'},
                {dir:['w','west'],id:'23-madi'},
                {dir:['e','east'],id:'23-lexi'},
                {dir:['n','north'],id:'24-park'}
            ],
        },
        {
            id:'22-park',
            name: 'Park Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-park'},
                {dir:['w','west'],id:'22-broa'},
                {dir:['e','east'],id:'22-lexi'},
                {dir:['n','north'],id:'23-park'}
            ],
        },
        {
            id:'21-park',
            name: 'Park Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-park'},
                {dir:['w','west'],id:'21-broa'},
                {dir:['e','east'],id:'21-gram-1'},
                {dir:['n','north'],id:'22-park'}
            ],
        },
        {
            id:'20-park',
            name: 'Park Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-park'},
                {dir:['w','west'],id:'20-broa'},
                {dir:['e','east'],id:'20-gram-1'},
                {dir:['n','north'],id:'21-park'}
            ],
        },
        {
            id:'19-park',
            name: 'Park Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-park'},
                {dir:['w','west'],id:'19-broa'},
                {dir:['e','east'],id:'19-irvi'},
                {dir:['n','north'],id:'20-park'}
            ],
        },
        {
            id:'18-park',
            name: 'Park Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-unio-2'},
                {dir:['w','west'],id:'18-broa'},
                {dir:['e','east'],id:'18-irvi'},
                {dir:['n','north'],id:'19-park'}
            ],
        },
        //Lexington Ave
        {
            id:'34-lexi',
            name: 'Lexington Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-lexi'},
                {dir:['w','west'],id:'34-park'},
                {dir:['e','east'],id:'34-3'},
                {dir:['n','north'],id:'35'}
            ],
        },
        {
            id:'33-lexi',
            name: 'Lexington Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '32-lexi'},
                {dir:['w','west'],id:'33-park'},
                {dir:['e','east'],id:'33-3'},
                {dir:['n','north'],id:'34-lexi'}
            ],
        },
        {
            id:'32-lexi',
            name: 'Lexington Avenue and 32nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '31-lexi'},
                {dir:['w','west'],id:'32-park'},
                {dir:['e','east'],id:'32-3'},
                {dir:['n','north'],id:'33-lexi'}
            ],
        },
        {
            id:'31-lexi',
            name: 'Lexington Avenue and 31st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-lexi'},
                {dir:['w','west'],id:'31-park'},
                {dir:['e','east'],id:'31-3'},
                {dir:['n','north'],id:'32-lexi'}
            ],
        },
        {
            id:'30-lexi',
            name: 'Lexington Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-lexi'},
                {dir:['w','west'],id:'30-park'},
                {dir:['e','east'],id:'30-3'},
                {dir:['n','north'],id:'31-lexi'}
            ],
        },
        {
            id:'29-lexi',
            name: 'Lexington Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-lexi'},
                {dir:['w','west'],id:'29-park'},
                {dir:['e','east'],id:'29-3'},
                {dir:['n','north'],id:'30-lexi'}
            ],
        },
        {
            id:'28-lexi',
            name: 'Lexington Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-lexi'},
                {dir:['w','west'],id:'28-park'},
                {dir:['e','east'],id:'28-3'},
                {dir:['n','north'],id:'29-lexi'}
            ],
        },
        {
            id:'27-lexi',
            name: 'Lexington Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-lexi'},
                {dir:['w','west'],id:'27-park'},
                {dir:['e','east'],id:'27-3'},
                {dir:['n','north'],id:'28-lexi'}
            ],
        },
        {
            id:'26-lexi',
            name: 'Lexington Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-lexi'},
                {dir:['w','west'],id:'26-park'},
                {dir:['e','east'],id:'26-3'},
                {dir:['n','north'],id:'27-lexi'}
            ],
        },
        {
            id:'25-lexi',
            name: 'Lexington Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-lexi'},
                {dir:['w','west'],id:'25-park'},
                {dir:['e','east'],id:'25-3'},
                {dir:['n','north'],id:'26-lexi'}
            ],
        },
        {
            id:'24-lexi',
            name: 'Lexington Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-lexi'},
                {dir:['w','west'],id:'24-park'},
                {dir:['e','east'],id:'24-3'},
                {dir:['n','north'],id:'25-lexi'}
            ],
        },
        {
            id:'23-lexi',
            name: 'Lexington Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-lexi'},
                {dir:['w','west'],id:'23-park'},
                {dir:['e','east'],id:'23-3'},
                {dir:['n','north'],id:'24-lexi'}
            ],
        },
        {
            id:'22-lexi',
            name: 'Lexington Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-lexi'},
                {dir:['w','west'],id:'22-park'},
                {dir:['e','east'],id:'22-3'},
                {dir:['n','north'],id:'23-lexi'}
            ],
        },
        {
            id:'21-lexi',
            name: 'Lexington Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['w','west'],id:'21-gram-1'},
                {dir:['e','east'],id:'21-gram-2'},
                {dir:['n','north'],id:'22-lexi'}
            ],
        },
        //Gramercy Park East and West
        {
            id:'21-gram-1',
            name: 'Gramercy Park West and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-gram-1'},
                {dir:['w','west'],id:'21-park'},
                {dir:['e','east'],id:'21-lexi'},
            ],
        },
        {
            id:'20-gram-1',
            name: 'Gramercy Park West and 20th Street',
            desc:``,
            exits:[
                {dir:['w','west'],id:'20-park'},
                {dir:['e','east'],id:'20-irvi'},
                {dir:['n','north'],id:'21-gram-1'}
            ],
        },
        {
            id:'21-gram-2',
            name: 'Gramercy Park East and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-gram-2'},
                {dir:['w','west'],id:'21-lexi'},
                {dir:['e','east'],id:'21-3'},
            ],
        },
        {
            id:'20-gram-2',
            name: 'Gramercy Park East and 20th Street',
            desc:``,
            exits:[
                {dir:['w','west'],id:'20-irvi'},
                {dir:['e','east'],id:'20-3'},
                {dir:['n','north'],id:'21-gram-2'}
            ],
        },
        //Irving Plaza
        {
            id:'20-irvi',
            name: 'Irving Plaza and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-irvi'},
                {dir:['w','west'],id:'20-gram-1'},
                {dir:['e','east'],id:'20-gram-2'},
            ],
        },
        {
            id:'19-irvi',
            name: 'Irving Plaza and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-irvi'},
                {dir:['w','west'],id:'19-park'},
                {dir:['e','east'],id:'19-3'},
                {dir:['n','north'],id:'20-irvi'}
            ],
        },
        {
            id:'18-irvi',
            name: 'Irving Plaza and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-irvi'},
                {dir:['w','west'],id:'18-park'},
                {dir:['e','east'],id:'18-3'},
                {dir:['n','north'],id:'19-irvi'}
            ],
        },
        {
            id:'17-irvi',
            name: 'Irving Plaza and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-irvi'},
                {dir:['w','west'],id:'17-unio-2'},
                {dir:['e','east'],id:'17-3'},
                {dir:['n','north'],id:'18-irvi'}
            ],
        },
        {
            id:'16-irvi',
            name: 'Irving Plaza and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-irvi'},
                {dir:['w','west'],id:'16-unio-2'},
                {dir:['e','east'],id:'16-3'},
                {dir:['n','north'],id:'17-irvi'}
            ],
        },
        {
            id:'15-irvi',
            name: 'Irving Plaza and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-irvi'},
                {dir:['w','west'],id:'15-unio-2'},
                {dir:['e','east'],id:'15-3'},
                {dir:['n','north'],id:'16-irvi'}
            ],
        },
        {
            id:'14-irvi',
            name: 'Irving Plaza and 14th Street',
            desc:``,
            exits:[
                {dir:['w','west'],id:'14-unio-1'},
                {dir:['e','east'],id:'14-3'},
                {dir:['n','north'],id:'15-irvi'}
            ],
        },
        //3rd Ave
        {
            id:'34-3',
            name: '3rd Avenue and 34th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-3'},
                {dir:['w','west'],id:'34-2'},
                {dir:['e','east'],id:'34-lexi'},
                {dir:['n','north'],id:'35-3'}
            ],
        },
        {
            id:'33-3',
            name: '3rd Avenue and 33rd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '32-3'},
                {dir:['w','west'],id:'33-2'},
                {dir:['e','east'],id:'33-lexi'},
                {dir:['n','north'],id:'34-3'}
            ],
        },
        {
            id:'32-3',
            name: '3rd Avenue and 32nd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '31-3'},
                {dir:['w','west'],id:'32-2'},
                {dir:['e','east'],id:'32-lexi'},
                {dir:['n','north'],id:'33-3'}
            ],
        },
        {
            id:'31-3',
            name: '3rd Avenue and 31st Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-3'},
                {dir:['w','west'],id:'31-2'},
                {dir:['e','east'],id:'31-lexi'},
                {dir:['n','north'],id:'32-3'}
            ],
        },
        {
            id:'30-3',
            name: '3rd Avenue and 30th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-3'},
                {dir:['w','west'],id:'30-2'},
                {dir:['e','east'],id:'30-lexi'},
                {dir:['n','north'],id:'31-3'}
            ],
        },
        {
            id:'29-3',
            name: '3rd Avenue and 29th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-3'},
                {dir:['w','west'],id:'29-2'},
                {dir:['e','east'],id:'29-lexi'},
                {dir:['n','north'],id:'30-3'}
            ],
        },
        {
            id:'28-3',
            name: '3rd Avenue and 28th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-3'},
                {dir:['w','west'],id:'28-2'},
                {dir:['e','east'],id:'28-lexi'},
                {dir:['n','north'],id:'29-3'}
            ],
        },
        {
            id:'27-3',
            name: '3rd Avenue and 27th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-3'},
                {dir:['w','west'],id:'27-2'},
                {dir:['e','east'],id:'27-lexi'},
                {dir:['n','north'],id:'28-3'}
            ],
        },
        {
            id:'26-3',
            name: '3rd Avenue and 26th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-3'},
                {dir:['w','west'],id:'26-2'},
                {dir:['e','east'],id:'26-lexi'},
                {dir:['n','north'],id:'27-3'}
            ],
        },
        {
            id:'25-3',
            name: '3rd Avenue and 25th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-3'},
                {dir:['w','west'],id:'25-2'},
                {dir:['e','east'],id:'25-lexi'},
                {dir:['n','north'],id:'26-3'}
            ],
        },
        {
            id:'24-3',
            name: '3rd Avenue and 24th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-3'},
                {dir:['w','west'],id:'24-2'},
                {dir:['e','east'],id:'24-lexi'},
                {dir:['n','north'],id:'25-3'}
            ],
        },
        {
            id:'23-3',
            name: '3rd Avenue and 23rd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-3'},
                {dir:['w','west'],id:'23-2'},
                {dir:['e','east'],id:'23-lexi'},
                {dir:['n','north'],id:'24-3'}
            ],
        },
        {
            id:'22-3',
            name: '3rd Avenue and 22nd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-3'},
                {dir:['w','west'],id:'22-2'},
                {dir:['e','east'],id:'22-lexi'},
                {dir:['n','north'],id:'23-3'
                }
            ],
        },
        {
            id:'21-3',
            name: '3rd Avenue and 21st Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-3'},
                {dir:['w','west'],id:'21-2'},
                {dir:['e','east'],id:'21-gram-2'},
                {dir:['n','north'],id:'22-3'}
            ],
        },
        {
            id:'20-3',
            name: '3rd Avenue and 20th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-3'},
                {dir:['w','west'],id:'20-2'},
                {dir:['e','east'],id:'20-gram-2'},
                {dir:['n','north'],id:'21-3'
                }
            ],
        },
        {
            id:'19-3',
            name: '3rd Avenue and 19th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-3'},
                {dir:['w','west'],id:'19-2'},
                {dir:['e','east'],id:'19-irvi'},
                {dir:['n','north'],id:'20-3'
                }
            ],
        },
        {
            id:'18-3',
            name: '3rd Avenue and 18th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-3'},
                {dir:['w','west'],id:'18-2'},
                {dir:['e','east'],id:'18-irvi'},
                {dir:['n','north'],id:'19-3'}
            ],
        },
        {
            id:'17-3',
            name: '3rd Avenue and 17th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-3'},
                {dir:['w','west'],id:'ruth-17'},
                {dir:['e','east'],id:'17-irvi'},
                {dir:['n','north'],id:'18-3'}
            ],
        },
        {
            id:'16-3',
            name: '3rd Avenue and 16th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-3'},
                {dir:['w','west'],id:'ruth-16'},
                {dir:['e','east'],id:'16-irvi'},
                {dir:['n','north'],id:'17-3'}
            ],
        },
        {
            id:'15-3',
            name: '3rd Avenue and 15th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-3'},
                {dir:['w','west'],id:'ruth-15'},
                {dir:['e','east'],id:'15-irvi'},
                {dir:['n','north'],id:'16-3'}
            ],
        },
        {
            id:'14-3',
            name: '3rd Avenue and 14th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '13'},
                {dir:['w','west'],id:'14-2'},
                {dir:['e','east'],id:'14-irvi'},
                {dir:['n','north'],id:'15-3'}
            ],
        },
        //2nd Ave
        {
            id:'34-2',
            name: '2nd Avenue and 34th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-2'},
                {dir:['e','east'],id:'34-1'},
                {dir:['w','west'],id:'34-3'},
                {dir:['n','north'],id:'35-2'}
            ],
        },
        {
            id:'33-2',
            name: '2nd Avenue and 33rd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '32-2'},
                {dir:['e','east'],id:'33-1'},
                {dir:['w','west'],id:'33-3'},
                {dir:['n','north'],id:'34-2'}
            ],
        },
        {
            id:'32-2',
            name: '2nd Avenue and 32nd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '31-2'},
                {dir:['w','west'],id:'32-3'},
                {dir:['n','north'],id:'33-2'}
            ],
        },
        {
            id:'31-2',
            name: '2nd Avenue and 31st Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-2'},
                {dir:['e','west'],id:'31-3'},
                {dir:['n','north'],id:'32-2'}
            ],
        },
        {
            id:'30-2',
            name: '2nd Avenue and 30th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-2'},
                {dir:['e','east'],id:'30-1'},
                {dir:['w','west'],id:'30-3'},
                {dir:['n','north'],id:'31-2'}
            ],
        },
        {
            id:'29-2',
            name: '2nd Avenue and 29th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-2'},
                {dir:['e','east'],id:'29-1'},
                {dir:['w','west'],id:'29-3'},
                {dir:['n','north'],id:'30-2'}
            ],
        },
        {
            id:'28-2',
            name: '2nd Avenue and 28th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-2'},
                {dir:['e','east'],id:'car-28'},
                {dir:['w','west'],id:'28-3'},
                {dir:['n','north'],id:'29-2'}
            ],
        },
        {
            id:'27-2',
            name: '2nd Avenue and 27th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-2'},
                {dir:['w','west'],id:'27-3'},
                {dir:['n','north'],id:'28-2'}
            ],
        },
        {
            id:'26-2',
            name: '2nd Avenue and 26th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-2'},
                {dir:['e','east'],id:'car-26'},
                {dir:['w','west'],id:'26-3'},
                {dir:['n','north'],id:'27-2'}
            ],
        },
        {
            id:'25-2',
            name: '2nd Avenue and 25th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-2'},
                {dir:['e','east'],id:'25-1'},
                {dir:['w','west'],id:'25-3'},
                {dir:['n','north'],id:'26-2'}
            ],
        },
        {
            id:'24-2',
            name: '2nd Avenue and 24th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-2'},
                {dir:['e','east'],id:'24-1'},
                {dir:['w','west'],id:'24-3'},
                {dir:['n','north'],id:'25-2'}
            ],
        },
        {
            id:'23-2',
            name: '2nd Avenue and 23rd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-2'},
                {dir:['e','east'],id:'23-1'},
                {dir:['w','west'],id:'23-3'},
                {dir:['n','north'],id:'24-2'}
            ],
        },
        {
            id:'22-2',
            name: '2nd Avenue and 22nd Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-2'},
                {dir:['e','east'],id:'22-1'},
                {dir:['w','west'],id:'22-3'},
                {dir:['n','north'],id:'23-2'}
            ],
        },
        {
            id:'21-2',
            name: '2nd Avenue and 31st Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-2'},
                {dir:['e','east'],id:'21-1'},
                {dir:['w','west'],id:'21-3'},
                {dir:['n','north'],id:'22-2'}
            ],
        },
        {
            id:'20-2',
            name: '2nd Avenue and 30th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-2'},
                {dir:['e','east'],id:'20-1'},
                {dir:['w','west'],id:'20-3'},
                {dir:['n','north'],id:'21-2'}
            ],
        },
        {
            id:'19-2',
            name: '2nd Avenue and 19th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-2'},
                {dir:['e','east'],id:'19-1'},
                {dir:['w','west'],id:'19-3'},
                {dir:['n','north'],id:'20-2'}
            ],
        },
        {
            id:'18-2',
            name: '2nd Avenue and 18th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-2'},
                {dir:['e','east'],id:'18-1'},
                {dir:['w','west'],id:'18-3'},
                {dir:['n','north'],id:'19-2'}
            ],
        },
        {
            id:'17-2',
            name: '2nd Avenue and 17th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-2'},
                {dir:['e','east'],id:'nath-17'},
                {dir:['w','west'],id:'ruth-17'},
                {dir:['n','north'],id:'18-2'}
            ],
        },
        {
            id:'15-2',
            name: '2nd Avenue and 16th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-2'},
                {dir:['e','east'],id:'nath-15'},
                {dir:['w','west'],id:'ruth-15'},
                {dir:['n','north'],id:'17-2'}
            ],
        },        
        {
            id:'14-2',
            name: '2nd Avenue and 14th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: '13'},
                {dir:['e','east'],id:'14-1'},
                {dir:['w','west'],id:'14-3'},
                {dir:['n','north'],id:'15-2'}
            ],
        },
        //Rutherford Plaza
        {
            id:'ruth-17',
            name: 'Rutherford Plaza and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'ruth-16'},
                {dir:['e','east'],id:'17-2'},
                {dir:['w','west'],id:'17-3'},
            ],
        },
        {
            id:'ruth-16',
            name: 'Rutherford Plaza and 16th Steet',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'ruth-15'},
                {dir:['w','west'],id:'16-3'},
                {dir:['n','north'],id:'ruth-17'}
            ],
        },
        {
            id:'ruth-15',
            name: 'Rutherford Plaza and 15th Street',
            desc:``,
            exits:[
                {dir:['e','east'],id:'15-2'},
                {dir:['w','west'],id:'15-3'},
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
                {dir:['e','east'],id:'17-1'},
                {dir:['w','west'],id:'17-2'},
            ],
        },
        {
            id:'nath-16',
            name: 'Nathan D Perlman Plaza and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'nath-15'},
                {dir:['e','east'],id:'16-1'},
                {dir:['n','north'],id:'ruth-17'}
            ],
        },
        {
            id:'nath-15',
            name: 'Nathan D Perlman Plaza and 15th Street',
            desc:``,
            exits:[
                {dir:['e','east'],id:'15-1'},
                {dir:['w','west'],id:'15-2'},
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
            exits:[
                {dir:['w','west'],id:'26-2'},
                {dir:['e','east'],id:'26-1'}
            ]
        },
        //1st Ave
        {
            id:'34-1',
            name: '1st Avenue and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '33-1'},
                {dir:['e','east'],id:'fdr-34'},
                {dir:['w','west'],id:'34-2'},
                {dir:['n','north'],id:'35-1'}
            ],
        },
        {
            id:'33-1',
            name: '1st Avenue and 33rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '30-1'},
                {dir:['w','west'],id:'33-2'},
                {dir:['n','north'],id:'34-1'}
            ],
        },
        {
            id:'30-1',
            name: '1st Avenue and 30th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '29-1'},
                {dir:['w','west'],id:'30-2'},
                {dir:['n','north'],id:'33-1'}
            ],
        },
        {
            id:'29-1',
            name: '1st Avenue and 29th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '28-1'},
                {dir:['w','west'],id:'29-2'},
                {dir:['n','north'],id:'30-1'}
            ],
        },
        {
            id:'28-1',
            name: '1st Avenue and 28th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '27-1'},
                {dir:['w','west'],id:'28-2'},
                {dir:['n','north'],id:'29-1'}
            ],
        },
        {
            id:'27-1',
            name: '1st Avenue and 27th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '26-1'},
                {dir:['n','north'],id:'28-1'}
            ],
        },
        {
            id:'26-1',
            name: '1st Avenue and 26th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-1'},
                {dir:['w','west'],id:'car-26'},
                {dir:['n','north'],id:'27-1'}
            ],
        },
        {
            id:'25-1',
            name: '1st Avenue and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '24-1'},
                {dir:['w','west'],id:'25-2'},
                {dir:['n','north'],id:'26-1'}
            ],
        },
        {
            id:'24-1',
            name: '1st Avenue and 24th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-1'},
                {dir:['w','west'],id:'24-2'},
                {dir:['n','north'],id:'25-1'}
            ],
        },
        {
            id:'23-1',
            name: '1st Avenue and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '22-1'},
                {dir:['w','west'],id:'23-2'},
                {dir:['e','east'],id:'levy-23'},
                {dir:['n','north'],id:'24-1'}
            ],
        },
        {
            id:'22-1',
            name: '1st Avenue and 22nd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '21-1'},
                {dir:['w','west'],id:'22-2'},
                {dir:['e','east'],id:'pete-22'},
                {dir:['n','north'],id:'23-1'}
            ],
        },
        {
            id:'21-1',
            name: '1st Avenue and 21st Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '20-1'},
                {dir:['w','west'],id:'21-2'},
                {dir:['n','north'],id:'22-1'}
            ],
        },
        {
            id:'20-1',
            name: '1st Avenue and 20th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '19-1'},
                {dir:['w','west'],id:'20-2'},
                {dir:['n','north'],id:'21-1'}
            ],
        },
        {
            id:'19-1',
            name: '1st Avenue and 19th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '18-1'},
                {dir:['w','west'],id:'19-2'},
                {dir:['n','north'],id:'20-1'}
            ],
        },
        {
            id:'18-1',
            name: '1st Avenue and 18th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '17-1'},
                {dir:['w','west'],id:'18-2'},
                {dir:['n','north'],id:'19-1'}
            ],
        },
        {
            id:'17-1',
            name: '1st Avenue and 17th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '16-1'},
                {dir:['w','west'],id:'nath-17'},
                {dir:['n','north'],id:'18-1'}
            ],
        },
        {
            id:'16-1',
            name: '1st Avenue and 16th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '15-1'},
                {dir:['w','west'],id:'nath-16'},
                {dir:['n','north'],id:'17-1'}
            ],
        },
        {
            id:'15-1',
            name: '1st Avenue and 15th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '14-1'},
                {dir:['w','west'],id:'nath-15'},
                {dir:['n','north'],id:'16-1'}
            ],
        },
        {
            id:'14-1',
            name: '1st Avenue and 14th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '13'},
                {dir:['w','west'],id:'14-2'},
                {dir:['n','north'],id:'15-1'}
            ],
        },
        //Misc streets East side of map
        {
            id:'34-fdr',
            name: 'FDR Drive and 34th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '25-fdr'},
                {dir:['w','west'],id:'34-1'}
            ],
        },
        {
            id:'23-fdr',
            name: 'FDR Drive and 23rd Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: 'pete-fdr'},
                {dir:['w','west'],id:'23-levy'},
                {dir:['n','north'],id:'25-fdr'}
            ],
        },
        {
            id:'25-fdr',
            name:'FDR Drive and 25th Street',
            desc:``,
            exits:[
                    {dir:['s','south'],id: '23-fdr'},
                    {dir:['w','west'],id:'25-levy'},
                    {dir:['n','north'],id:'34-fdr'}
            ],
        },
        {
            id:'pete-fdr',
            name: 'FDR Drive and Peter Cooper Road',
            desc:``,
            exits:[
                {dir:['w','west'],id:'22-1'},
                {dir:['n','north'],id:'23-fdr'}
            ],
        },,
        {
            id:'23-levy',
            name: 'Asser Levy Plaza and 23rd Street',
            desc:``,
            exits:[
                {dir:['n','north'],id: '25-levy'},
                {dir:['w','west'],id:'23-1'},
                {dir:['e','east'],id:'23-fdr'}
            ],
        },
        {
            id:'25-levy',
            name: 'Asser Levy Plaza and 25th Street',
            desc:``,
            exits:[
                {dir:['s','south'],id: '23-lecy'},
                {dir:['w','west'],id:'25-1'},
                {dir:['e','east'],id:'25-fdr'}
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
