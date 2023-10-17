const teamFlamengo = {
    goalkeeper:   'Rossi',
    centerback1:  'Leo P.',
    centerback2:  'Fabrício B.',
    leftback:     'Ayrton Lucas',
    rightback:    'Wesley',
    dmidfielder:  'Pulgar',
    midfielder :  'Gerson',
    lmidfielder:  'Arrascaeta',
    rmidfielder:  'Everton R.',
    centerfoward: 'Gabi',
    striker:      'Bruno Henrique',
    coach:        'Tite',

    defense: function() {
        return ( `${this.centerback1}, ${this.centerback2}, ${this.leftback}, ${this.rightback}` )
    },

    midfiled : function() {
        return ( `${this.dmidfielder}, ${this.midfielder}, ${this.lmidfielder}, ${this.rmidfielder}` )
    },

    attack : function() {
        return ( `${this.centerfoward}, ${this.striker}` )
    },

}

console.log(teamFlamengo.centerback1)
console.log(teamFlamengo.dmidfielder)
console.log(teamFlamengo.striker)

console.log()

console.log(teamFlamengo.defense())
console.log(teamFlamengo.midfiled())
console.log(teamFlamengo.attack())