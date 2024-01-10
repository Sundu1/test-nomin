"""added sms_response

Revision ID: d9a8bda8d636
Revises: 061174cf7daa
Create Date: 2023-12-20 19:33:55.266195

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'd9a8bda8d636'
down_revision = '061174cf7daa'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('sms_response', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'sms_response')
    # ### end Alembic commands ###