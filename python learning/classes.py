# to monitor the booking of passengers to a flight , ensuring that only available seats can be booked
class Flight:
    def  __init__(self, capacity):
        self.capacity = capacity
        self.passengers = []

    def add_passenger(self, name):
        if not self.open_seats():
            return False
        self.passengers.append(name)
        return True
        
    def open_seats(self):
        return self.capacity - len(self.passengers)
  
flight = Flight(3)

people = ["John", "Victor", "Hope", "Ify"]
for person in people:
    success = flight.add_passenger(person)
    if success:
        print(f"Added {person} to the flight successfully")
    else:
        print(f"{person} was not added succesfully - no available seat")
