import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Event from "../components/Event";
import client, { EventType } from "../lib/prismicio";

interface EventsProps {
  events: EventType[];
}

const Events: NextPage<EventsProps> = ({ events }) => {
  return (
    <>
      <Head>
        <title>Events - Shravan Samsi</title>
        <meta name="description" content="" />
      </Head>

      <Navbar />

      <main className="px-4 pt-16 pb-24 sm:px-8 md:px-12 lg:px-32 xl:px-44 2xl:px-56 3xl:mx-auto 3xl:max-w-[144rem] 3xl:px-0">
        <h1 className="font-smallcaps mb-16 rounded-lg bg-accent py-8 text-center font-serif text-6xl font-bold text-dark xl:text-9xl">
          Events
        </h1>

        <div className="grid grid-cols-1 gap-10 md:gap-16 2xl:grid-cols-2">
          {events.length > 0 ? (
            events.map((event) => <Event key={event.id} event={event} />)
          ) : (
            <p className="text-center text-base font-medium sm:text-xl md:text-left md:text-2xl xl:text-3xl">
              There are currently no Events coming up.
            </p>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
};

export async function getStaticProps() {
  const data = await client.getAllByType("events", {
    orderings: [{ field: "my.events.date", direction: "asc" }],
  });

  const events: EventType[] = data.map((event) => ({
    id: event.id,
    type: event.type,
    href: event.href,
    tags: event.tags,
    first_publication_date: event.first_publication_date,
    last_publication_date: event.last_publication_date,
    data: {
      name: event.data.name,
      location: {
        name: event.data.location[0].location_name,
        url: event.data.location[0].location_link,
      },
      date: event.data.date,
      time: event.data.time,
      paid: event.data.paid,
      ticket_link: event.data.ticket_link.url,
      poster: {
        url: event.data.poster.url,
        alt: event.data.poster.alt,
      },
    },
  }));

  return { props: { events }, revalidate: 60 };
}

export default Events;
