import React, {useLayoutEffect} from 'react'
import {MEALS, CATEGORIES}  from '../data/dummy-data'
import MealsList from '../components/MealsList/MealsList'

const MealsOverviewScreen = ({route, navigation}) => {
    const {categoryId} = route.params

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0
    })

    useLayoutEffect(() => {
        const singleCategory = CATEGORIES.find((category) => category.id == categoryId)
    
        navigation.setOptions({
            title: singleCategory.title
        })
    },[categoryId, navigation])


    return <MealsList items={displayedMeals} />   
}

export default MealsOverviewScreen