import { fakerFI as faker } from "@faker-js/faker";

faker.seed(50);

const customers = Array.from({ length: 100 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  email: faker.internet.email(),
}));

export type Customer = typeof customers[number];

const employees = Array.from({ length: 10 }, () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  jobTitle: faker.person.jobTitle(),
}));

export type Employee = typeof employees[number];

const services = Array.from({ length: 100 }, () => ({
  id: faker.string.uuid(),
  street: faker.location.street(),
  zipCode: faker.location.zipCode(),
  city: faker.location.city(),
  representativeEmployeeId: faker.helpers.arrayElement(employees).id,
  customerId: faker.helpers.arrayElement(customers).id,
}));

export type Service = typeof services[number];

const installations = Array.from({ length: 150 }, () => ({
  id: faker.string.uuid(),
  serviceId: faker.helpers.arrayElement(services).id,
  installationEmployeeId: faker.helpers.arrayElement(employees).id,
  installedAt: faker.date.past(),
}));

export type Installation = typeof installations[number];

const reclamations = Array.from({ length: 200 }, () => ({
  id: faker.string.uuid(),
  createdAt: faker.date.recent(),
  serviceId: faker.helpers.arrayElement(services).id,
}));

export const db = {
  service: {
    getMany: async () => {
      await sleep()
      return services
    },
    getById: async (id: string) => {
      await sleep()
      return services.find((service) => service.id === id)
    },
  },
  installation: {
    getMany: async () => {
      await sleep()
      return installations
    },
    getById: async (id: string) => {
      await sleep()
      return installations.find((installation) => installation.id === id)
    },
  },
  customer: {
    getMany: async () => {
      await sleep()
      return customers
    },
    getById: async (id: string) => {
      await sleep()
      return customers.find((customer) => customer.id === id)
    },
  },
  employee: {
    getMany: async () => {
      await sleep()
      return employees
    },
    getById: async (id: string) => {
      await sleep()
      return employees.find((employee) => employee.id === id)
    },
  },
  reclamation: {
    getMany: async () => {
      await sleep()
      return reclamations
    },
    getById: async (id: string) => {
      await sleep()
      return reclamations.find((reclamation) => reclamation.id === id)
    },
  },
} as const;

const sleep = () => new Promise((resolve) => setTimeout(resolve, 250));
