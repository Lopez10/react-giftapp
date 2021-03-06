import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GiftExpertApp = () => {
      const [categories, setCategories] = useState(['Futbol']);
      return (
            <>
                  <h2>GiftExpertApp</h2>
                  <AddCategory setCategories={setCategories} />
                  <hr />
                  {/* <button onClick={handleAdd}>Agregar</button> */}
                  <ol>
                        {categories.map(category => (
                              <GifGrid key={category} category={category} />
                        ))}
                  </ol>
            </>
      );
};

export default GiftExpertApp;
