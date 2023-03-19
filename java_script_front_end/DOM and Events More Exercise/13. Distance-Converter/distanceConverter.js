function attachEventsListeners() {
    const input = document.querySelector('#inputDistance')
    const output = document.querySelector('#outputDistance')
    const btn = document.querySelector('#convert')
    btn.addEventListener('click', onConvert)
    
    const ratios = {
      km: 1000,
      m: 1,
      cm: 0.01,
      mm: 0.001,
      mi: 1609.34,
      yrd: 0.9144,
      ft: 0.3048,
      in: 0.0254
    }
    
    function convert(value, unit1, unit2) {
       const inMeters = value * ratios[unit1]
       return inMeters / ratios[unit2]
    }
 
    function onConvert(ev) {
       let fromUnit = Array
       .from(document.querySelectorAll('#inputUnits>option'))
       .filter(opt => opt.selected)[0].value
 
       let toUnit = Array
       .from(document.querySelectorAll('#outputUnits>option'))
       .filter(opt => opt.selected)[0].value
 
       output.value = convert(Number(input.value), fromUnit, toUnit)
   
    }
 }  