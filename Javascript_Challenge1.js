const people = [

    {
        name: 'Arisa',
        department: 'BP',
        gender: 'F'
    },
    
	{
        name: 'Ham',
        department: 'IT',
        gender: 'F'
    },
    
	{
        name: 'Alice',
        department: 'IT',
        gender: 'F'
    },
    
	{
        name: 'Anna',
        department: 'DA',
        gender: 'F'
    },
    
	{
        name: 'Larry',
        department: 'Sales',
        gender: 'M'
    },
    
	{
        name: 'Ria',
        department: 'Sales',
        gender: 'F'
    },
    
	{
        name: 'JD',
        department: 'Sales',
        gender: 'M'
    },
    
	{
        name: 'Thor',
        department: 'Sales',
        gender: 'M'
    },
    
	{
        name: 'Karl',
        department: 'Sales',
        gender: 'M'
    },
    
	{
        name: 'Rachel',
        department: 'Sales',
        gender: 'F'
	}
];

listByGender = (gender) => {
    return people.filter((people) => {
        return people.gender == gender
    });
}

console.log(listByGender('M'))
console.log(listByGender('F'))

groupByDepartment = () =>{
    return people.reduce((result,curentValue) => {
        (result[curentValue["department"]] = result[curentValue["department"]] || []).push(curentValue.name)
        return result
    },{});
}

console.log(groupByDepartment())
