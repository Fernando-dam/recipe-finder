'use client'

import Link from 'next/link'
import { Meal } from '@/lib/types'

interface RecipeGridProps {
  recipes: Meal[]
}

export function RecipeGrid({ recipes }: RecipeGridProps) {
  if (recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Search for recipes to get started</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link key={recipe.idMeal} href={`/recipe/${recipe.idMeal}`}>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer h-full">
            {recipe.strMealThumb && (
              <img
                src={recipe.strMealThumb}
                alt={recipe.strMeal}
                className="w-full h-48 object-cover hover:scale-105 transition"
              />
            )}
            <div className="p-4">
              <h3 className="font-bold text-lg text-gray-800 truncate">
                {recipe.strMeal}
              </h3>
              <p className="text-gray-500 text-sm">Click to see details →</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
