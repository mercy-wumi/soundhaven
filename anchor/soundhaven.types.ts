/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/soundhaven.json`.
 */
export type Soundhaven = {
  "address": "DKW5QK3EBQy1Mk8Fq2aJiVftw2ffEnFoWpNX59CRyxBy",
  "metadata": {
    "name": "soundhaven",
    "version": "0.1.0",
    "spec": "0.1.0",
    "description": "Created with Anchor"
  },
  "instructions": [
    {
      "name": "acceptPayment",
      "discriminator": [
        16,
        43,
        253,
        85,
        86,
        15,
        24,
        181
      ],
      "accounts": [
        {
          "name": "payment",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  112,
                  97,
                  121,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "receiver",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram"
        },
        {
          "name": "tokenProgram",
          "address": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        },
        {
          "name": "clock",
          "address": "SysvarC1ock11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "createSong",
      "discriminator": [
        127,
        207,
        208,
        177,
        26,
        61,
        248,
        164
      ],
      "accounts": [
        {
          "name": "song",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  115,
                  111,
                  110,
                  103
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              },
              {
                "kind": "account",
                "path": "user.song_count",
                "account": "user"
              }
            ]
          }
        },
        {
          "name": "user",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "songName",
          "type": "string"
        },
        {
          "name": "songUrl",
          "type": "string"
        }
      ]
    },
    {
      "name": "deleteSong",
      "discriminator": [
        146,
        88,
        254,
        164,
        193,
        81,
        122,
        206
      ],
      "accounts": [
        {
          "name": "song",
          "writable": true
        },
        {
          "name": "user",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "deleteUser",
      "discriminator": [
        186,
        85,
        17,
        249,
        219,
        231,
        98,
        251
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": []
    },
    {
      "name": "initializeUser",
      "discriminator": [
        111,
        17,
        185,
        250,
        60,
        122,
        38,
        254
      ],
      "accounts": [
        {
          "name": "user",
          "writable": true,
          "pda": {
            "seeds": [
              {
                "kind": "const",
                "value": [
                  117,
                  115,
                  101,
                  114
                ]
              },
              {
                "kind": "account",
                "path": "signer"
              }
            ]
          }
        },
        {
          "name": "signer",
          "writable": true,
          "signer": true
        },
        {
          "name": "systemProgram",
          "address": "11111111111111111111111111111111"
        }
      ],
      "args": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "profileImg",
          "type": "string"
        },
        {
          "name": "description",
          "type": "string"
        },
        {
          "name": "isArtist",
          "type": "bool"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "payment",
      "discriminator": [
        227,
        231,
        51,
        26,
        244,
        88,
        4,
        148
      ]
    },
    {
      "name": "song",
      "discriminator": [
        144,
        84,
        211,
        50,
        100,
        5,
        81,
        24
      ]
    },
    {
      "name": "user",
      "discriminator": [
        159,
        117,
        95,
        227,
        239,
        151,
        58,
        236
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "nameTooLong",
      "msg": "Name too long - max length of 50 characters"
    },
    {
      "code": 6001,
      "name": "profileImgUrlTooLong",
      "msg": "Profile image url link is too long"
    },
    {
      "code": 6002,
      "name": "descriptionTooLong",
      "msg": "Description is too long - max length of 200 characters"
    },
    {
      "code": 6003,
      "name": "songTitleTooLong",
      "msg": "Song title is too long - max length of 50 characters"
    },
    {
      "code": 6004,
      "name": "songUrlTooLong",
      "msg": "Song url is too long - max length of 200 characters"
    }
  ],
  "types": [
    {
      "name": "payment",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "wallet",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "song",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "songTitle",
            "type": "string"
          },
          {
            "name": "songUrl",
            "type": "string"
          },
          {
            "name": "songOwner",
            "type": "pubkey"
          }
        ]
      }
    },
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "pubkey"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "profileImg",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "isArtist",
            "type": "bool"
          },
          {
            "name": "hasPaid",
            "type": "bool"
          },
          {
            "name": "songCount",
            "type": "u8"
          },
          {
            "name": "likes",
            "type": "u64"
          }
        ]
      }
    }
  ]
};
