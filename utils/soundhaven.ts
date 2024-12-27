export const idl = {
    "address": "CnMfnsUqQ4nCXL5ta4YU8bAsFb5FmzFbBrTMA7Rkb1S1",
    "metadata": {
      "name": "soundhaven",
      "version": "0.1.0",
      "spec": "0.1.0",
      "description": "Created with Anchor"
    },
    "instructions": [
      {
        "name": "create_user",
        "discriminator": [
          108,
          227,
          130,
          130,
          252,
          109,
          75,
          218
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
            "name": "system_program",
            "address": "11111111111111111111111111111111"
          }
        ],
        "args": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "profile_img",
            "type": "string"
          },
          {
            "name": "description",
            "type": "string"
          },
          {
            "name": "is_artist",
            "type": "bool"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "User",
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
        "name": "SongTitleTooLong",
        "msg": "Song title too long"
      }
    ],
    "types": [
      {
        "name": "User",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "wallet_address",
              "type": "pubkey"
            },
            {
              "name": "name",
              "type": "string"
            },
            {
              "name": "profile_img",
              "type": "string"
            },
            {
              "name": "description",
              "type": "string"
            },
            {
              "name": "is_artist",
              "type": "bool"
            },
            {
              "name": "has_paid",
              "type": "bool"
            },
            {
              "name": "song_count",
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
  }