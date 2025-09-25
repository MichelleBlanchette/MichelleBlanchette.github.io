
export default function Testimonials() {

    const testimonials = [
        {
            date: "May 23, 2025",
            review: "Appreciate Michelle for being so thorough with the updates on profile pages. I can't wait to see how these convert.",
            person: "Rick",
            role: "Creative Director",
            company: "Insurance Marketplace",
        },
        {
            date: "April 30, 2025",
            review: "Appreciated Michelle jumping in and collaborating with the team to get a feature redesign out on schedule despite a data hiccup. Her proactive approach made a huge impact!",
            person: "Rob",
            role: "Product Manager",
            company: "Insurance Marketplace",
        },
        {
            date: "April 30, 2025",
            review: "Michelle consistently goes above and beyond to improve our SEO efforts, showing ownership, attention to detail, and a strong commitment to quality. From challenging outdated recommendations to coordinating high-priority releases to meet tight deadlines, her impact is felt across multiple teams.",
            person: "Chris",
            role: "General Manager",
            company: "Insurance Marketplace",
        },
        {
            date: "April 29, 2025",
            review: "Appreciate Michelle's help in launching the new website flow! Her thorough approach is greatly appreciated, and I know this will have a meaningful impact in our lead experience!",
            person: "Stephanie",
            role: "Marketing Director",
            company: "Insurance Marketplace",
        },
        {
            date: "March 11, 2025",
            review: "Appreciated Michelle's presentation on Website Speed Performance. It was incredibly thorough, with just the right level of technical detail for the audience. Her insights were invaluable in helping us quickly identify next steps.",
            person: "Michael",
            role: "Senior Web Developer",
            company: "Insurance Marketplace",
        },
        {
            date: "April 27, 2025",
            review: "It's wonderful to see Michelle's passion for consistently making improvements and holding herself accountable for monitoring the progress and transparency.",
            person: "Atif",
            role: "Director of Engineering",
            company: "Insurance Marketplace",
        },
        {
            date: "April 18, 2025",
            review: "Appreciate Michelle's dedication to helping improve our technical SEO. It does not go unnoticed and is very much appreciated!",
            person: "Nicole",
            role: "Senior Marketing Manager",
            company: "Insurance Marketplace",
        },
        {
            date: "October 25, 2024",
            review: "Appreciate all the Jira automations Michelle has built for us, especially as our codebase grows more interconnected across products. Her work has made it so much easier for us to stay focused on development, minimizing the admin overhead. It's a huge help for the whole team!",
            person: "Michael",
            role: "Senior Web Developer",
            company: "Insurance Marketplace",
        },
        {
            date: "May 31, 2024",
            review: "Michelle always goes above and beyond to help out the team. I really appreciate her positive attitude and willingness to take on any task.",
            person: "Pradeep",
            role: "Senior UX/UI Manager",
            company: "Insurance Marketplace",
        },
        {
            date: "May 1, 2024",
            review: "Appreciate all of Michelle's contributions to our website and for pioneering the release feature in Jira!",
            person: "Rob",
            role: "Product Manager",
            company: "Insurance Marketplace",
        },
        {
            date: "April 5, 2024",
            review: "We are so happy to have Michelle as part of the team and appreciate all the help she provides to her fellow colleagues daily and to the company.",
            person: "Jennifer",
            role: "Chief Commercial Officer",
            company: "Insurance Marketplace",
        },
        {
            date: "January 19, 2024",
            review: "Michelle's commitment to excellence, innovative solutions, and always positive attitude are really making a difference. Appreciate all she does!",
            person: "Xinzi",
            role: "CRO Manager",
            company: "Insurance Marketplace",
        },
        {
            date: "December 17, 2022",
            review: "I really enjoyed working with Michelle. I've worked with many developers over the past 8 years and I think Michelle was the most impressive that I have ever worked with. She was so responsive and an excellent communicator, truly. She was very thorough and helped me get my project completed quickly and very efficiently. It was a privilege to work with her.",
            person: "Nick",
            role: "Owner",
            company: "Pilot Training",
        },
        {
            date: "December 15, 2022",
            review: "Michelle was amazing! I'm so excited for our team to start using this new solution to manage our online course member program.",
            person: "Julie",
            role: "Owner",
            company: "Etsy Coaching",
        },
        {
            date: "November 23, 2022",
            review: "Michelle was fantastic and helped get our project to the finish line. We had a quick turnaround time and complex project and she was so helpful and easy to work with.",
            person: "Ben",
            role: "Owner",
            company: "Web Agency",
        },
        {
            date: "December 15, 2021",
            review: "We miss working with Michelle and her many talents. A new developer we brought on actually shared her Asana integration plugin as a potential in-house solution—not knowing she had worked with us in the past!",
            person: "Alicia",
            role: "Manager of Web Development",
            company: "Global Nonprofit",
        },
    ];

    return (
        <div className="component-Testimonials w-full py-20 sm:py-24 bg-white">
            <div className="max-w-5xl w-full p-4 mx-auto text-center">
                <h2 className="font-heading text-[42px]/9 sm:text-6xl/12 font-bold mb-5">Trusted by Clients and Colleagues</h2>
                <p className="text-lg max-w-2xl mx-auto">My solutions often improve my teams&rsquo; workflows, and stakeholders especially appreciate my commitment to delivering exceptional quality.</p>
                <ul className="space-y-6 my-8 text-left">
                    {   // TODO: Masonry or chat style layout for organic feel.
                        testimonials.map(({review, person, role, company}, idx) => (
                            <li key={idx} className="bg-white border border-gray-200 p-5 rounded-xl">
                                {review}<br />
                                {`${person}, ${role} @ ${company}`}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
}
