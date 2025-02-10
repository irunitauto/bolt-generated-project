import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'
import CategorySection from '../components/CategorySection'
import FeaturedRecipesCarousel from '../components/FeaturedRecipesCarousel'
import Papa from 'papaparse'
import { supabase } from '../supabaseConfig'

function HomePage() {
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: async (results) => {
        console.log('Parsed CSV data:', results.data);
        try {
          const { data, error } = await supabase
            .from('recipes')
            .insert(results.data.map(row => ({
              title: row.Title,
              description: row.Description,
              seo_meta: {
                title: row.SEOTitle,
                description: row.SEODescription,
                keywords: row.Keywords
              },
              source_url: row.SourceURL
            })));

          if (error) {
            console.error('Error inserting data:', error);
          } else {
            console.log('Data inserted successfully:', data);
          }
        } catch (error) {
          console.error('Error during Supabase insert:', error);
        }
      },
    });
  };

  return (
    <>
      <Helmet>
        <title>AllRecipy - Premium Recipe Collection</title>
        <meta name="description" content="Discover hand-picked recipes perfect for any occasion" />
      </Helmet>

      <Header />
      <CategorySection />
      <FeaturedRecipesCarousel />

      <input type="file" accept=".csv" onChange={handleFileUpload} />
    </>
  )
}

export default HomePage
