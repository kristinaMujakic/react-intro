function App() {
    return (
        <div>
            <Person
                name="Viktor"
                age={26}
                hobbies={["cooking", "fishing", "drinking beer"]}
            />
            <Person
                name="Karolina"
                age={25}
                hobbies={["painting", "walking", "going to the gym"]}
            />
            <Person
                name="Kamila"
                age={23}
                hobbies={["reading", "doing laundry", "cleaning"]}
            />
        </div>
    );
}