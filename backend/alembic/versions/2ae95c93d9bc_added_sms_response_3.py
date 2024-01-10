"""added sms_response_3

Revision ID: 2ae95c93d9bc
Revises: acd5104f52bf
Create Date: 2023-12-23 14:58:08.181763

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '2ae95c93d9bc'
down_revision = 'acd5104f52bf'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('sms_response_revealed', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'sms_response_revealed')
    # ### end Alembic commands ###