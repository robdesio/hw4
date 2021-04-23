window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code

  // Create variable to store ride data
  let riderData=json
  console.log(riderData)
  // Loop through ride data
  for(let i = 0; i <riderData.length ; i++) {
    let nooberRide = riderData[i]

  // Create a variable to store ride data in memory
    let nooberList = document.querySelector(`.rides `)
    
  // use if statement to determine class of service (and sanity check)

      if (nooberRide.purpleRequested == true) {
        riderService = `Noober Purple`
        borderType = `border-4 border-purple-500 p-4 my-4 text-left`
      } 
      else if (nooberRide.purpleRequested == false && nooberRide.numberOfPassengers > 3) {
        riderService = `Noober XL`
        borderType = `border-4 border-red-500 p-4 my-4 text-left`
      }
      else if (nooberRide.purpleRequested == false && nooberRide.numberOfPassengers <=3 ) {
        riderService = `Noober X`
        borderType = `border-4 border-blue-500 p-4 my-4 text-left`
      }
      else {
        riderService = `Error`
        borderType = `border-4 border-yellow-500 p-4 my-4 text-left`
      }

  // Insert HTML into the interface
  nooberList.insertAdjacentHTML(`beforeend`, `
  <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
      <i class="fas fa-car-side"></i>
      <span>${riderService}</span>
    </h1>

    <div class="${borderType}">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${nooberRide.passengerDetails.first} ${nooberRide.passengerDetails.last}</h2>
          <p class="font-bold text-gray-600">${nooberRide.passengerDetails.phoneNumber}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${nooberRide.numberOfPassengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${nooberRide.pickupLocation.address}</p>
          <p>${nooberRide.pickupLocation.city}, ${nooberRide.pickupLocation.state} ${nooberRide.pickupLocation.zip}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${nooberRide.dropoffLocation.address}</p>
          <p>${nooberRide.dropoffLocation.city}, ${nooberRide.dropoffLocation.state} ${nooberRide.dropoffLocation.zip}</p>
        </div>
      </div>
    </div>
  
  
  
  
  `)
  }
})

// Rubric
// (1 point) Write the recipe (algorithm) for the approach you're taking in the comments. As previously discussed, it is highly recommended you do this first, then write the code.
// (4 points) Loop through all of the available rides contained within the json variable provided. Traverse this data – print the level of service and information on each ride as illustrated by the design mockup (4 points). You should end up with all 100 rides on the page, along with the correct information on each ride and the level of service – the rules for determining the level of service are the same as the Week 3 homework.
// (1 point) Empty the rides div element; you should be left with only an empty div element in your HTML, but a page full of data.
// (For fun) Give each level of service a different visual look – for example, a purple border for Noober Purple rides or larger text for Noober XL rides.

    // <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    // <i class="fas fa-car-side"></i>
    // <span>Noober X</span>
    // </h1>

    // <div class="border-4 border-gray-900 p-4 my-4 text-left">
    // <div class="flex">
    //   <div class="w-1/2">
    //     <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
    //     <p class="font-bold text-gray-600">(312) 555-1212</p>
    //   </div>
    //   <div class="w-1/2 text-right">
    //     <span class="rounded-xl bg-gray-600 text-white p-2">
    //       2 passengers
    //     </span>
    //   </div>
    // </div>
    // <div class="mt-4 flex">
    //   <div class="w-1/2">
    //     <div class="text-sm font-bold text-gray-600">PICKUP</div>
    //     <p>123 Main St</p>
    //     <p>Chicago, IL 60603</p>
    //   </div>
    //   <div class="w-1/2">
    //     <div class="text-sm font-bold text-gray-600">DROPOFF</div>
    //     <p>123 Main St</p>
    //     <p>Chicago, IL 60603</p>
    //   </div>
    // </div>
    // </div>

    // <!-- A sample Noober XL -->
    // <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    // <i class="fas fa-car-side"></i>
    // <span>Noober XL</span>
    // </h1>

    // <div class="border-4 border-gray-900 p-4 my-4 text-left">
    // <div class="flex">
    //   <div class="w-1/2">
    //     <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
    //     <p class="font-bold text-gray-600">(312) 555-1212</p>
    //   </div>
    //   <div class="w-1/2 text-right">
    //     <span class="rounded-xl bg-gray-600 text-white p-2">
    //       5 passengers
    //     </span>
    //   </div>
    // </div>
    // <div class="mt-4 flex">
    //   <div class="w-1/2">
    //     <div class="text-sm font-bold text-gray-600">PICKUP</div>
    //     <p>123 Main St</p>
    //     <p>Chicago, IL 60603</p>
    //   </div>
    //   <div class="w-1/2">
    //     <div class="text-sm font-bold text-gray-600">DROPOFF</div>
    //     <p>123 Main St</p>
    //     <p>Chicago, IL 60603</p>
    //   </div>
    // </div>
    // </div>

    // <!-- A sample Noober Purple -->
    // <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
    // <i class="fas fa-car-side"></i>
    // <span>Noober Purple</span>
    // </h1>

    // <div class="border-4 border-gray-500 p-4 my-4 text-left">
    // <div class="flex">
    //   <div class="w-1/2">
    //     <h2 class="text-2xl py-1">Foghorn Leghorn</h2>
    //     <p class="font-bold text-gray-600">(312) 555-1212</p>
    //   </div>
    //   <div class="w-1/2 text-right">
    //     <span class="rounded-xl bg-gray-600 text-white p-2">
    //       1 passengers
    //     </span>
    //   </div>
    // </div>
    // <div class="mt-4 flex">
    //   <div class="w-1/2">
    //     <div class="text-sm font-bold text-gray-600">PICKUP</div>
    //     <p>123 Main St</p>
    //     <p>Chicago, IL 60603</p>
    //   </div>
    //   <div class="w-1/2">
    //     <div class="text-sm font-bold text-gray-600">DROPOFF</div>
    //     <p>123 Main St</p>
    //     <p>Chicago, IL 60603</p>
    //   </div>
    // </div>
    // </div>