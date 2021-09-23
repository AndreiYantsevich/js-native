const ages = [18, 20, 22, 1, 100, 90, 14]

const predicate = (ages: number) => {
    return ages > 90
}

const oldAges = [100] // > 90

type CourseType = {
    title: string
    price: number
}

const courses = [
    {title: 'CSS', price: 110},
    {title: 'JS', price: 200},
    {title: 'React', price: 150},
]

const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
}

const cheapCourse = [
    {title: 'CSS', price: 110},
    {title: 'React', price: 150},
]