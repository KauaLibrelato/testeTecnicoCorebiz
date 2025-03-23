interface Position {
    latitude: number;
    longitude: number;
}

interface Location {
    name: string;
    city: string;
    country: string;
    position: Position;
}

interface Exif {
    make: string;
    model: string;
    exposure_time: string;
    aperture: string;
    focal_length: string;
    iso: number;
}

interface Urls {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
}

interface Links {
    self: string;
    html: string;
    download: string;
    download_location: string;
}

interface UserLinks {
    self: string;
    html: string;
    photos: string;
    likes: string;
    portfolio: string;
}

interface User {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    portfolio_url: string;
    bio: string;
    location: string;
    total_likes: number;
    total_photos: number;
    total_collections: number;
    instagram_username: string;
    twitter_username: string;
    links: UserLinks;
}

interface Collection {
    id: number;
    title: string;
    published_at: string;
    last_collected_at: string;
    updated_at: string;
    cover_photo: null | unknown;
    user: null | unknown;
}

export interface Tag {
    title: string;
}

type TopicSubmission = {
    approved_on?: string;
    status: "approved" | "rejected" | "pending";
};

type TopicSubmissions = Record<string, TopicSubmission>;

export interface IPhoto {
    id: string;
    created_at: string;
    updated_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    downloads: number;
    likes: number;
    liked_by_user: boolean;
    description: string;
    alt_description: string;
    exif: Exif;
    location: Location;
    current_user_collections: Collection[];
    urls: Urls;
    links: Links;
    user: User;
    tags: Tag[];
    topic_submissions: TopicSubmissions;
}

export interface IPhotoResponse {
    results: IPhoto[];
    total: number;
    total_pages: number;
}
