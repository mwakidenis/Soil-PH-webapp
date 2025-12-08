import React from 'react';

const InputSection = ({ location, setLocation, phLevel, phType, onSubmit }) => {
  const kenyaCounties = [
    { value: 'Mombasa', label: 'Mombasa' },
    { value: 'Kwale', label: 'Kwale' },
    { value: 'Kilifi', label: 'Kilifi' },
    { value: 'Tana River', label: 'Tana River' },
    { value: 'Lamu', label: 'Lamu' },
    { value: 'Taita-Taveta', label: 'Taita-Taveta' },
    { value: 'Garissa', label: 'Garissa' },
    { value: 'Wajir', label: 'Wajir' },
    { value: 'Mandera', label: 'Mandera' },
    { value: 'Marsabit', label: 'Marsabit' },
    { value: 'Isiolo', label: 'Isiolo' },
    { value: 'Meru', label: 'Meru' },
    { value: 'Tharaka-Nithi', label: 'Tharaka-Nithi' },
    { value: 'Embu', label: 'Embu' },
    { value: 'Kitui', label: 'Kitui' },
    { value: 'Machakos', label: 'Machakos' },
    { value: 'Makueni', label: 'Makueni' },
    { value: 'Nyandarua', label: 'Nyandarua' },
    { value: 'Nyeri', label: 'Nyeri' },
    { value: 'Kirinyaga', label: 'Kirinyaga' },
    { value: 'Murang\'a', label: 'Murang\'a' },
    { value: 'Kiambu', label: 'Kiambu' },
    { value: 'Turkana', label: 'Turkana' },
    { value: 'West Pokot', label: 'West Pokot' },
    { value: 'Samburu', label: 'Samburu' },
    { value: 'Trans Nzoia', label: 'Trans Nzoia' },
    { value: 'Uasin Gishu', label: 'Uasin Gishu' },
    { value: 'Elgeyo-Marakwet', label: 'Elgeyo-Marakwet' },
    { value: 'Nandi', label: 'Nandi' },
    { value: 'Baringo', label: 'Baringo' },
    { value: 'Laikipia', label: 'Laikipia' },
    { value: 'Nakuru', label: 'Nakuru' },
    { value: 'Narok', label: 'Narok' },
    { value: 'Kajiado', label: 'Kajiado' },
    { value: 'Kericho', label: 'Kericho' },
    { value: 'Bomet', label: 'Bomet' },
    { value: 'Kakamega', label: 'Kakamega' },
    { value: 'Vihiga', label: 'Vihiga' },
    { value: 'Bungoma', label: 'Bungoma' },
    { value: 'Busia', label: 'Busia' },
    { value: 'Siaya', label: 'Siaya' },
    { value: 'Kisumu', label: 'Kisumu' },
    { value: 'Homa Bay', label: 'Homa Bay' },
    { value: 'Migori', label: 'Migori' },
    { value: 'Kisii', label: 'Kisii' },
    { value: 'Nyamira', label: 'Nyamira' },
    { value: 'Nairobi', label: 'Nairobi' },
  ];
  
  
return (
  <>
  <div className="input-section">
    <div className='input-section-layout'>
    <div className="form-group">
      <label htmlFor="location">Enter Location:</label>
    <select>
      {kenyaCounties.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    </div>
      <p className='results'>Estimated pH Level: {phLevel || 'N/A'}</p>
      <p className='results'>Soil pH Type: {phType || 'N/A'}</p>
  </div>
  <div className='btn-div'><button onClick={onSubmit}>Submit Report</button></div>
  </div>
  </>
);
}

export default InputSection;