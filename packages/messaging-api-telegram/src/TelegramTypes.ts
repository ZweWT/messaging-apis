export type Update = {
  update_id: string;
  message?: Message;
  edited_message?: Message;
  channel_post?: Message;
  edited_channel_post?: Message;
  inline_query?: InlineQuery;
  chosen_inline_result?: ChosenInlineResult;
  callback_query?: CallbackQuery;
  shipping_query?: ShippingQuery;
  pre_checkout_query?: PreCheckoutQuery;
  poll?: Poll;
};

/**
 * Contains information about the current status of a webhook.
 */
export type WebhookInfo = {
  /**
   * Webhook URL, may be empty if webhook is not set up
   */
  url: string;

  /**
   * True, if a custom certificate was provided for webhook certificate checks
   */
  has_custom_certificate: boolean;

  /**
   * Number of updates awaiting delivery
   */
  pending_update_count: number;

  /**
   * Optional. Unix time for the most recent error that happened when trying to deliver an update via webhook
   */
  last_error_date?: number;

  /**
   * Optional. Error message in human-readable format for the most recent error that happened when trying to deliver an update via webhook
   */
  last_error_message?: string;

  /**
   * Optional. Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery
   */
  max_connections?: number;

  /**
   * Optional. A list of update types the bot is subscribed to. Defaults to all update types
   */
  allowed_updates?: string[];
};

export type User = {
  chat_id: number | string;
  text: string;
  parse_mode?: string;
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

// TODO: separate different type because some fields returned only in getChat.
export type Chat = {
  id: number;
  type: 'private' | 'group' | 'supergroup' | 'channel';
  title?: string;
  username?: string;
  first_name?: string;
  last_name?: string;
  photo?: ChatPhoto;
  description?: string;
  invite_link?: string;
  pinned_message?: Message;
  permissions?: ChatPermissions;
  sticker_set_name?: string;
  can_set_sticker_set?: boolean;
};

export type Message = {
  message_id: number;
  from?: User; // TODO: empty for messages sent to channels
  date: number;
  chat: Chat;
  forward_from?: User;
  forward_from_chat?: Chat;
  forward_from_message_id?: number;
  forward_signature?: string;
  forward_sender_name?: string;
  forward_date?: number;
  reply_to_message?: Message;
  edit_date?: number;
  media_group_id?: string;
  author_signature?: string;
  text?: string;
  entities?: MessageEntity[];
  caption_entities?: MessageEntity[];
  audio?: Audio;
  document?: Document;
  animation?: Animation;
  game?: Game;
  photo?: PhotoSize[];
  sticker?: Sticker;
  video?: Video;
  voice?: Voice;
  video_note?: VideoNote;
  caption?: string;
  contact?: Contact;
  location?: Location;
  venue?: Venue;
  poll?: Poll;
  new_chat_members?: User[];
  left_chat_member?: User;
  new_chat_title?: string;
  new_chat_photo?: PhotoSize[];
  delete_chat_photo?: boolean;
  group_chat_created?: boolean;
  supergroup_chat_created?: boolean;
  channel_chat_created?: boolean;
  migrate_to_chat_id?: number;
  migrate_from_chat_id?: number;
  pinned_message?: Message;
  invoice?: Invoice;
  successful_payment?: SuccessfulPayment;
  connected_website?: string;
  passport_data?: PassportData;
  reply_markup?: InlineKeyboardMarkup;
};

export type MessageEntity = {
  type:
    | 'mention'
    | 'hashtag'
    | 'cashtag'
    | 'bot_command'
    | 'url'
    | 'email'
    | 'phone_number'
    | 'bold'
    | 'italic'
    | 'code'
    | 'pre'
    | 'text_link'
    | 'text_mention';
  offset: number;
  length: number;
  url?: string;
  user?: User;
};

export type PhotoSize = {
  file_id: string;
  width: number;
  height: number;
  file_size?: number;
};

export type Audio = {
  file_id: string;
  duration: number;
  performer?: string;
  title?: string;
  mime_type?: string;
  file_size?: number;
  thumb?: PhotoSize;
};

export type Document = {
  file_id: string;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};

export type Video = {
  file_id: string;
  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  mime_type?: string;
  file_size?: number;
};

export type Animation = {
  file_id: string;
  width: number;
  height: number;
  duration: number;
  thumb?: PhotoSize;
  file_name?: string;
  mime_type?: string;
  file_size?: number;
};

export type Voice = {
  file_id: string;
  duration: number;
  mime_type?: string;
  file_size?: number;
};

export type VideoNote = {
  file_id: string;
  length: number;
  duration: number;
  thumb?: PhotoSize;
  file_size?: number;
};

export type Contact = {
  phone_number: string;
  first_name: string;
  last_name?: string;
  user_id?: number;
  vcard?: string;
};

export type Location = {
  longitude: number;
  latitude: number;
};

export type Venue = {
  location: Location;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
};

export type PollOption = {
  text: string;
  voter_count: number;
};

export type Poll = {
  id: string;
  question: string;
  options: PollOption[];
  is_closed: boolean;
};

export type UserProfilePhotos = {
  total_count: number;
  photos: PhotoSize[][];
};

export type File = {
  file_id: string;
  file_size?: number;
  file_path: string;
};

export type ReplyKeyboardMarkup = {
  keyboard: KeyboardButton[][];
  resize_keyboard?: boolean;
  one_time_keyboard?: boolean;
  selective?: boolean;
};

export type KeyboardButton = {
  text: string;
  request_contact?: boolean;
  request_location?: boolean;
};

export type ReplyKeyboardRemove = {
  remove_keyboard: boolean;
  selective?: boolean;
};

export type InlineKeyboardMarkup = {
  inline_keyboard: InlineKeyboardButton[][];
};

export type InlineKeyboardButton = {
  text: string;
  url?: string;
  login_url?: LoginUrl;
  callback_data?: string;
  switch_inline_query?: string;
  switch_inline_query_current_chat?: string;
  callback_game?: CallbackGame;
  pay?: boolean;
};

export type LoginUrl = {
  url: string;
  forward_text?: string;
  bot_username?: string;
  request_write_access?: boolean;
};

export type CallbackQuery = {
  id: string;
  from: User;
  message?: Message;
  inline_message_id?: string;
  chat_instance: string;
  data?: string;
  game_short_name?: string;
};

export type ForceReply = {
  force_reply: boolean;
  selective?: boolean;
};

export type ChatPhoto = {
  small_file_id: string;
  big_file_id: string;
};

export type ChatMember = any;

export type ChatPermissions = {
  can_send_messages?: boolean;
  can_send_media_messages?: boolean;
  can_send_polls?: boolean;
  can_send_other_messages?: boolean;
  can_add_web_page_previews?: boolean;
  can_change_info?: boolean;
  can_invite_users?: boolean;
  can_pin_messages?: boolean;
};

export type ResponseParameters = any;

export type InputMedia =
  | InputMediaAnimation
  | InputMediaDocument
  | InputMediaAudio
  | InputMediaPhoto
  | InputMediaVideo;

export type InputMediaPhoto = {
  type: 'photo';
  media: string;
  caption?: string;
  parse_mode?: string;
  disable_web_page_preview?: boolean;
  disable_notification?: boolean;
  reply_to_message_id?: number;
  reply_markup?:
    | InlineKeyboardMarkup
    | ReplyKeyboardMarkup
    | ReplyKeyboardRemove
    | ForceReply;
};

export type InputMediaVideo = {
  type: 'video';
  media: string;
  thumb?: string;
  caption?: string;
  parse_mode?: string;
  width?: number;
  height?: number;
  duration?: number;
  supports_streaming?: boolean;
};

export type InputMediaAnimation = {
  type: 'animation';
  media: string;
  thumb?: string;
  caption?: string;
  parse_mode?: string;
  width?: number;
  height?: number;
  duration?: number;
};

export type InputMediaAudio = {
  type: 'audio';
  media: string;
  thumb?: string;
  caption?: string;
  parse_mode?: string;
  duration?: number;
  performer?: string;
  title?: string;
};

export type InputMediaDocument = {
  type: 'document';
  media: string;
  thumb?: string;
  caption?: string;
  parse_mode?: string;
};

export type ChatAction =
  | 'typing'
  | 'upload_photo'
  | 'record_video'
  | 'upload_video'
  | 'record_audio'
  | 'upload_audio'
  | 'upload_document'
  | 'find_location'
  | 'record_video_note'
  | 'upload_video_note';

// Stickers
export type Sticker = {
  file_id: string;
  width: number;
  height: number;
  is_animated: boolean;
  thumb?: PhotoSize;
  emoji?: string;
  set_name?: string;
  mask_position?: MaskPosition;
  file_size?: number;
};

export type StickerSet = {
  name: string;
  title: string;
  is_animated: boolean;
  contains_masks: boolean;
  stickers: Sticker[];
};

export type MaskPosition = {
  point: 'forehead' | 'eyes' | 'mouth' | 'chin';
  x_shift: number;
  y_shift: number;
  scale: number;
};

// Inline Mode
export type InlineQuery = {
  id: string;
  from: User;
  location?: Location;
  query: string;
  offset: string;
};

export type InlineQueryResult =
  | InlineQueryResultCachedAudio
  | InlineQueryResultCachedDocument
  | InlineQueryResultCachedGif
  | InlineQueryResultCachedMpeg4Gif
  | InlineQueryResultCachedPhoto
  | InlineQueryResultCachedSticker
  | InlineQueryResultCachedVideo
  | InlineQueryResultCachedVoice
  | InlineQueryResultArticle
  | InlineQueryResultAudio
  | InlineQueryResultContact
  | InlineQueryResultGame
  | InlineQueryResultDocument
  | InlineQueryResultGif
  | InlineQueryResultLocation
  | InlineQueryResultMpeg4Gif
  | InlineQueryResultPhoto
  | InlineQueryResultVenue
  | InlineQueryResultVideo
  | InlineQueryResultVoice;

export type InlineQueryResultArticle = {
  type: 'article';
  id: string;
  title: string;
  input_message_content: InputMessageContent;
  reply_markup?: InlineKeyboardMarkup;
  url?: string;
  hide_url?: boolean;
  description?: string;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
};

export type InlineQueryResultPhoto = {
  type: 'photo';
  id: string;
  photo_url: string;
  thumb_url: string;
  title?: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultGif = {
  type: 'gif';
  id: string;
  gif_url: string;
  gif_width?: number;
  gif_height?: number;
  gif_duration?: number;
  thumb_url: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultMpeg4Gif = {
  type: 'mpeg4_gif';
  id: string;
  mpeg4_url: string;
  mpeg4_width?: number;
  mpeg4_height?: number;
  mpeg4_duration?: number;
  thumb_url: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultVideo = {
  type: 'video';
  id: string;
  video_url: string;
  mime_type: string;
  thumb_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  video_width?: number;
  video_height?: number;
  video_duration?: number;
  description?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultAudio = {
  type: 'audio';
  id: string;
  audio_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  performer?: string;
  audio_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultVoice = {
  type: 'voice';
  id: string;
  voice_url: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  voice_duration?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultDocument = {
  type: 'document';
  id: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  document_url: string;
  mime_type: string;
  description?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
};

export type InlineQueryResultLocation = {
  type: 'location';
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  live_period?: number;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
};

export type InlineQueryResultVenue = {
  type: 'venue';
  id: string;
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
};

export type InlineQueryResultContact = {
  type: 'contact';
  id: string;
  phone_number: string;
  first_name: string;
  last_name?: string;
  vcard?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
  thumb_url?: string;
  thumb_width?: number;
  thumb_height?: number;
};

export type InlineQueryResultGame = {
  type: 'game';
  id: string;
  game_short_name: string;
  reply_markup?: InlineKeyboardMarkup;
};

export type InlineQueryResultCachedPhoto = {
  type: 'photo';
  id: string;
  photo_file_id: string;
  title?: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedGif = {
  type: 'gif';
  id: string;
  gif_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedMpeg4Gif = {
  type: 'mpeg4_gif';
  id: string;
  mpeg4_file_id: string;
  title?: string;
  caption?: string;
  parse_mode?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedSticker = {
  type: 'sticker';
  id: string;
  sticker_file_id: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedDocument = {
  type: 'document';
  id: string;
  title: string;
  document_file_id: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedVideo = {
  type: 'video';
  id: string;
  video_file_id: string;
  title: string;
  description?: string;
  caption?: string;
  parse_mode?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedVoice = {
  type: 'voice';
  id: string;
  voice_file_id: string;
  title: string;
  caption?: string;
  parse_mode?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InlineQueryResultCachedAudio = {
  type: 'audio';
  id: string;
  audio_file_id: string;
  caption?: string;
  parse_mode?: string;
  reply_markup?: InlineKeyboardMarkup;
  input_message_content?: InputMessageContent;
};

export type InputMessageContent =
  | InputTextMessageContent
  | InputLocationMessageContent
  | InputVenueMessageContent
  | InputContactMessageContent;

export type InputTextMessageContent = {
  message_text: string;
  parse_mode?: string;
  disable_web_page_preview?: boolean;
};

export type InputLocationMessageContent = {
  latitude: number;
  longitude: number;
  live_period?: number;
};

export type InputVenueMessageContent = {
  latitude: number;
  longitude: number;
  title: string;
  address: string;
  foursquare_id?: string;
  foursquare_type?: string;
};

export type InputContactMessageContent = {
  phone_number: string;
  first_name: string;
  last_name?: string;
  vcard?: string;
};

export type ChosenInlineResult = {
  result_id: string;
  from: User;
  location?: Location;
  inline_message_id?: string;
  query: string;
};

// Payments
export type LabeledPrice = {
  label: string;
  amount: number;
};

export type Invoice = {
  title: string;
  description: string;
  start_parameter: string;
  currency: string;
  total_amount: number;
};

export type ShippingAddress = {
  country_code: string;
  state: string;
  city: string;
  street_line1: string;
  street_line2: string;
  post_code: string;
};

export type OrderInfo = {
  name?: string;
  phone_number?: string;
  email?: string;
  shipping_address?: ShippingAddress;
};

export type ShippingOption = {
  id: string;
  title: string;
  prices: LabeledPrice[];
};

export type SuccessfulPayment = {
  currency: string;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
  telegram_payment_charge_id: string;
  provider_payment_charge_id: string;
};

export type ShippingQuery = {
  id: string;
  from: User;
  invoice_payload: string;
  shipping_address: ShippingAddress;
};

export type PreCheckoutQuery = {
  id: string;
  from: User;
  currency: string;
  total_amount: number;
  invoice_payload: string;
  shipping_option_id?: string;
  order_info?: OrderInfo;
};

// Telegram Passport
export type PassportData = {
  data: EncryptedPassportElement[];
  credentials: EncryptedCredentials;
};

export type PassportFile = {
  file_id: string;
  file_size: number;
  file_date: number;
};

export type EncryptedPassportElement = {
  type:
    | 'personal_details'
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'address'
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration'
    | 'phone_number'
    | 'email';
  data?: string;
  phone_number?: string;
  email?: string;
  files?: PassportFile[];
  front_side?: PassportFile;
  reverse_side?: PassportFile;
  selfie?: PassportFile;
  translation?: PassportFile[];
  hash: string;
};

export type EncryptedCredentials = {
  data: string;
  hash: string;
  secret: string;
};

export type PassportElementError =
  | PassportElementErrorDataField
  | PassportElementErrorFrontSide
  | PassportElementErrorReverseSide
  | PassportElementErrorSelfie
  | PassportElementErrorFile
  | PassportElementErrorFiles
  | PassportElementErrorTranslationFile
  | PassportElementErrorTranslationFiles
  | PassportElementErrorUnspecified;

export type PassportElementErrorDataField = {
  source: string;
  type:
    | 'personal_details'
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'address';
  field_name: string;
  data_hash: string;
  message: string;
};

export type PassportElementErrorFrontSide = {
  source: 'front_side';
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport';
  file_hash: string;
  message: string;
};

export type PassportElementErrorReverseSide = {
  source: 'reverse_side';
  type: 'driver_license' | 'identity_card';
  file_hash: string;
  message: string;
};

export type PassportElementErrorSelfie = {
  source: 'selfie';
  type: 'passport' | 'driver_license' | 'identity_card' | 'internal_passport';
  file_hash: string;
  message: string;
};

export type PassportElementErrorFile = {
  source: 'file';
  type:
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration';
  file_hash: string;
  message: string;
};

export type PassportElementErrorFiles = {
  source: 'files';
  type:
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration';
  file_hashes: string[];
  message: string;
};

export type PassportElementErrorTranslationFile = {
  source: 'translation_file';
  type:
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration';
  file_hash: string;
  message: string;
};

export type PassportElementErrorTranslationFiles = {
  source: 'translation_files';
  type:
    | 'passport'
    | 'driver_license'
    | 'identity_card'
    | 'internal_passport'
    | 'utility_bill'
    | 'bank_statement'
    | 'rental_agreement'
    | 'passport_registration'
    | 'temporary_registration';
  file_hashes: string[];
  message: string;
};

export type PassportElementErrorUnspecified = {
  source: 'unspecified';
  type: string;
  element_hash: string;
  message: string;
};

// Games
export type Game = {
  title: string;
  description: string;
  photo: PhotoSize[];
  text?: string;
  text_entities?: MessageEntity[];
  animation?: Animation;
};

export type CallbackGame = any;

export type GameHighScore = {
  position: number;
  user: User;
  score: number;
};

export type SetWebhookOption = {
  /**
   * not supported yet.
   */
  certificate?: string;

  /**
   * Maximum allowed number of simultaneous HTTPS connections to the webhook for update delivery, 1-100. Defaults to 40. Use lower values to limit the load on your bot‘s server, and higher values to increase your bot’s throughput.
   */
  maxConnections?: number;

  /**
   * List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
   *
   * Please note that this parameter doesn't affect updates created before the call to the setWebhook, so unwanted updates may be received for a short period of time.
   */
  allowedUpdates?: string[];
};

export type GetUpdatesOption = {
  /**
   * Identifier of the first update to be returned. Must be greater by one than the highest among the identifiers of previously received updates. By default, updates starting with the earliest unconfirmed update are returned. An update is considered confirmed as soon as getUpdates is called with an offset higher than its update_id. The negative offset can be specified to retrieve updates starting from -offset update from the end of the updates queue. All previous updates will forgotten.
   */
  offset?: number;

  /**
   * Limits the number of updates to be retrieved. Values between 1—100 are accepted. Defaults to 100.
   */
  limit?: number;

  /**
   * Timeout in seconds for long polling. Defaults to 0, i.e. usual short polling. Should be positive, short polling should be used for testing purposes only.
   */
  timeout?: number;

  /**
   * List the types of updates you want your bot to receive. For example, specify [“message”, “edited_channel_post”, “callback_query”] to only receive updates of these types. See Update for a complete list of available update types. Specify an empty list to receive all updates regardless of type (default). If not specified, the previous setting will be used.
   *
   * Please note that this parameter doesn't affect updates created before the call to the getUpdates, so unwanted updates may be received for a short period of time.
   */
  allowedUpdates?: string[];
};