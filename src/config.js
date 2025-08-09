const tgApiSecret = 'b2F8JvLxM7qPzYhgfdhj779KrNsQ3CwA4';

export const config = {
    calendarYears: [2025, 2026],
    formKey: '566e2acc-e586-41b4-afc6-e1d4a4f4b743',
    openWeatherKey: 'f36a2ddc5e33d14d3708b92f20f1d315',
    getbookingsURL: `https://buic2mp6aid76yuv7a5bjlodxy0ptunc.lambda-url.eu-west-1.on.aws?secret=${tgApiSecret}`,
    getBookingsDetailsURL: `https://qb7o7nb5ohusfz6ljvq5v4h3ca0wpnpl.lambda-url.eu-west-1.on.aws/?secret=${tgApiSecret}`,
    addBookingURL: `https://o6bf7ljxy26un2h6dx5rlhjzvq0sxvfw.lambda-url.eu-west-1.on.aws/?secret=${tgApiSecret}`,
    updateBookingURL: `https://bxsmpq2rgp5psgqhkrbcfxndu40hyxsw.lambda-url.eu-west-1.on.aws/?secret=${tgApiSecret}`,
    deleteBookingURL: `https://p75vdbel6b6e5kguqmpk5yjapy0dixhz.lambda-url.eu-west-1.on.aws/?secret=${tgApiSecret}`,
    lat: 51.5206777,
    lon: -0.7401434,
    mapId: '15019cba5d15b2ed',
    location: 'Thieves Garden',
}