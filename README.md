# Projektdokumentation

**Navn:** Nadja Rømer Hesselbjerg

**Hold:** WU06

**Uddannelse:** Webudvikler

**Uddannelsessted:** Roskilde Teknisk Skole

## Stack

- HTML
- CSS
- Javascript
- ReactJS

## Teknisk Dokumentation

ReactJS

- Jeg har valgt ReactJS som framework for min application, først og fremmest fordi det er et framework jeg føler mig mest hjemme i, og jeg derfor kan arbejde meget mere hurtigt, effektivt og detaileorienteret. Men det er selvfølige ikke hovedargumentet. ReactJS er et komponentbaseret open-source javascript bibliotek, som gør det muligt for udvikler at arbejde fleksibelt på grunden af dens modulære opbygning. Det er nemt at vedligeholde ens application, og biblioteket tilbyder kraftfuld tilstands-, handlings- og begivenhedsstyring. ReactJS arbejder derudover sammen med Virtual DOM. Med denne funktion vil kun den nødvendige del af programmet blive opdateret i stedet for det hele. Virtual DOM kan sammenligne de tidligere og regelmæssige tilstande af komponenterne, og dette hjælper med at udvikle hurtigere resultater.

Tailwind Css

- Utility-first Css framework, som gør det muligt at style hurtigt med deres inbyggede utility-classes, som skrives direkte i HTML'en.

React Router

- React Router gør det muligt at undgå page-load. Dermed bliver aplicationen meget hurtigere for brugeren.

Axios

- Afløser fetch og henter data udfra en url.(Ligesom fetch, men retur-objectet er bedre structureret).

React Icons

- Bibliotek af Ikoner, som nemt kan importeres ind i react projekter.

React-Horizontal-Scrolling-Menu

- Jeg har brugt react-horizontal-scrolling-menu pakken til at lave min scrolling slider. Den leverer en react-component { ScrollMenu }, som har den inbygget funktionalitet man skal bruge til at lave en enkel touch slider.

React Hook Form og Yup

- Til min login process har jeg valgt react-hook-form i forbindelse med yup. React Hook Form er et hook-system som indsamler og validerer form data. Yup gør det endnu nemmere at rendere custom fejlmeddelelser med deres error-map. (Med andre ord: kortere kode, mere overskuelig kode).

## Valgfri opgave C - Automatiseret Deployment - løst

Som valfri opgave har jeg valt automatiseret deployment, fordi jeg ikke har særlig meget erfaring med det, men samtidig gerne ville blive bedre til det. Jeg har valgt Netlify, som kan nemt tilknyttes et Github repository.

Klik her: [Live deployment](https://trainwithnadja.netlify.app)

Da man ikke kunne tilknytte vores rts-github-classroom account, har jeg lavet en fork af mit repository, som er tilknyttet Netlify.

Klik her, hvis du vil se min fork: [Live deployment fork](https://github.com/Nadjaroemer/trainer-Nadjaroemer)

## Kode til særlig bedømmelse

I min [søgefunktion](/src/views/Search.js) anvender jeg conditional rendering.

Jeg bruger to metoder:

1. ternery operator, hvor jeg kigger på om jeg har en søg-værdi eller ej

```
return (
    <>
      <Navigation />
      <div className="ml-6 mr-6">
        <input
          className="w-full border rounded-3xl border-tertiary-500 p-3"
          value={searchValue}
          onChange={(event) => {
            setSearchValue(event.target.value);
          }}
          placeholder="Search classes"
        ></input>
      </div>
      {searchValue ? (
        renderSearchResults()
      ) : (
        <>
          <div className="p-6 grid grid-cols-2 grid-rows-auto">
            <HeadlineH3 text="Popular classes" />
          </div>
          {classes && <ClassCarousel data={classes} />}
          <div className="p-6 flex flex-col gap-4">
            <HeadlineH3 text="Popular trainers" />
            {trainers &&
              trainers.map((item, index) => (
                <TrainerCard data={item} key={index} />
              ))}
          </div>
        </>
      )}
    </>
  );

```

2. Jeg bruger en funktion, hvor jeg bruger if-else til at retunere to forskellige outputs

```
const renderSearchResults = () => {
    const searchResults = props.classes?.filter((individualClass) => {
      return individualClass.className
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    });
    if (searchResults.length === 0) {
      return (
        <div className="ml-6 mt-12">
          <HeadlineH3 text="No classes found. Please try again." />;
        </div>
      );
    }
    return (
      <>
        <div className="ml-6 mt-12">
          <HeadlineH3 text="Search results" />
        </div>
        <div className="p-6 grid grid-cols-2 grid-rows-auto">
          {searchResults.map((individualClass) => {
            return <Card key={individualClass.id} data={individualClass} />;
          })}
        </div>
      </>
    );
  };

```

## Hvis du vil starte applicationen...

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
