<template functional>
  <div class="card-body">
    <dl>
      <dt> Model:</dt>
      <dd>{{ props.starship.model }}</dd>

      <dt> Class: </dt>
      <dd>{{ props.starship.starship_class }}</dd>

      <dt> Manufacturer: </dt>
      <dd>{{ props.starship.manufacturer }}</dd>

      <dt> Length: </dt>
      <dd>{{ props.starship.length }}  m.</dd>

      <dt> Crew: </dt>
      <dd>{{ props.starship.crew }}</dd>

      <dt> Passengers: </dt>
      <dd>{{ props.starship.passengers }}</dd>

      <dt>  Max atmosphering speed:  </dt>
      <dd>{{ props.starship.max_atmosphering_speed }}</dd>

      <dt> Hyperdrive Rating: </dt>
      <dd>{{ props.starship.hyperdrive_rating }}</dd>

      <dt> MGLT: </dt>
      <dd>{{ props.starship.passengers }}</dd>

      <dt>  Cargo Capacity:  </dt>
      <dd>{{ props.starship.cargo_capacity }}</dd>

      <dt>  Consumables:  </dt>
      <dd>{{ props.starship.consumables }}</dd>
    </dl>
  </div>
</template>
