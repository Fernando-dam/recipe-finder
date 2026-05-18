import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const mealId = params.id

  if (!mealId) {
    return NextResponse.json(
      { error: 'Meal ID required' },
      { status: 400 }
    )
  }

  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    )

    if (!response.data.meals || response.data.meals.length === 0) {
      return NextResponse.json(
        { error: 'Recipe not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ meal: response.data.meals[0] })
  } catch (error) {
    console.error('Error fetching recipe details:', error)
    return NextResponse.json(
      { error: 'Failed to fetch recipe details' },
      { status: 500 }
    )
  }
}
