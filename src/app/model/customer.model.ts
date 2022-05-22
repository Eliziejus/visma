export interface Customer {
  id: number,
  fullName: string,
  email: string,
  address: Address
}

export interface Address {
  city: string,
  street: string,
  houseNumber: string,
  zipCode: string,
}
