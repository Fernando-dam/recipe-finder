import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json(
      { error: 'Search query required' },
      { status: 400 }
    )
  }

  try {
    // Buscar por ingrediente en TheMealDB
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(query)}`
    )

    if (!response.data.meals) {
      return NextResponse.json({ meals: [] })
    }

    return NextResponse.json({ meals: response.data.meals })
  } catch (error) {
    console.error('Error fetching recipes:', error)
    return NextResponse.json(
      { error: 'Failed to fetch recipes' },
      { status: 500 }
    )
  }
}
